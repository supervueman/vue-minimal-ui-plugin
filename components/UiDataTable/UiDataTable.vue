<template>
  <div class="ui-data-table" v-bind="$attrs">
    <table v-if="compareItems.length">
      <slot name="search-bar" v-if="showSearchBar"></slot>

      <thead>
        <tr>
          <th
            v-if="showSelect && !singleSelect && showSelectAll && items.length"
            class="check-td"
          >
            <label>
              <UiCheckbox
                @change="toggleAll"
                :checked="value.length === items.length"
              />
            </label>
          </th>
          <slot name="header-additional-row-start"></slot>
          <th v-for="(item, i) in headers" :key="`text-${i}`">
            <slot name="header-row" :item="item.text">
              <div v-if="showHeader">{{ item.text }}</div>
            </slot>
          </th>
          <slot name="header-additional-row-end"></slot>
        </tr>
      </thead>

      <tbody v-for="(item, i) in compareItems" :key="`tbody-${i}`">
        <tr v-if="showRowHeader" class="ui-data-table--body-row--header">
          <slot name="body-row-header" :item="item"></slot>
        </tr>
        <tr
          class="ui-data-table--body-row pointer"
          :class="{
            'ui-data-table--selected-row':
              selectedRow === item && showSelectRow,
            'pl-half': showSelectRow,
          }"
          @click="selectRow(item)"
        >
          <td v-if="showSelect && items.length" class="check-td">
            <UiCheckbox
              v-if="showCheckbox(item)"
              :dataValue="item"
              :checked="!!itemKeys.find((el) => el === item[itemKey])"
              @change="toggleItem"
            />
          </td>
          <slot name="body-row" :item="item" :index="i">
            <td v-for="(innerItem, i) in item" :key="`innerItem${i}`">
              {{ innerItem }}
            </td>
          </slot>
        </tr>
      </tbody>
    </table>

    <div v-else class="table_empty text-center">
      <h3 class="text-uppercase">{{ noDataMessage }}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UiDataTable",

    model: {
      prop: "value",
      event: "change",
    },

    props: {
      value: {
        type: Array,
        default: () => [],
      },
      headers: {
        type: Array,
        default: () => [],
      },
      items: {
        type: Array,
        default: () => [],
      },
      useBuffer: {
        type: Boolean,
        default: false,
      },
      singleSelect: {
        type: Boolean,
        default: false,
      },
      itemKey: {
        type: String,
        default: "",
      },
      showSelect: {
        type: Boolean,
        default: false,
      },
      showSelectAll: {
        type: Boolean,
        default: true,
      },
      showSelectRow: {
        type: Boolean,
        default: false,
      },
      showSearchBar: {
        type: Boolean,
        default: false,
      },
      showHeader: {
        type: Boolean,
        default: true,
      },
      showRowHeader: {
        type: Boolean,
        default: false,
      },
      showCheckboxIf: {
        type: Function,
        default: () => true,
      },
      useCheckboxIf: {
        type: Boolean,
        default: false,
      },
      noDataMessage: {
        type: String,
        default: "Нет данных",
      },
      isCompare: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        buffer: [],
        selectedRow: null,
      };
    },

    computed: {
      itemKeys() {
        return this.value.map((el) => el[this.itemKey]);
      },

      compareItems() {
        if (this.isCompare) {
          const compareItems = [];
          let items = [];
          let value = [];

          if (this.items) {
            items = this.items;
          }

          if (this.value) {
            value = this.value;
          }

          items.forEach((el) => {
            const existEl = value.find(
                    (val) => val[this.itemKey] === el[this.itemKey]
            );

            if (existEl) {
              compareItems.push(existEl);
            } else {
              compareItems.push({ ...el });
            }
          });

          if (compareItems.length === 0) {
            return value;
          }

          return compareItems;
        }
        return this.items;
      },
    },
    methods: {
      toggleItem($event) {
        let value = this.value;
        if (!this.singleSelect) {
          if ($event.checked) {
            if (this.useBuffer) {
              const existCachedItem = this.buffer.find(
                (el) => el[this.itemKey] === $event.value[this.itemKey]
              );

              if (existCachedItem) {
                value.push({ ...existCachedItem });
                this.buffer = this.buffer.filter(
                  (el) => el[this.itemKey] !== existCachedItem[this.itemKey]
                );
              } else {
                value.push({ ...$event.value });
              }
            } else {
              value.push({ ...$event.value });
            }
          } else {
            if (this.useBuffer) {
              const existCachedItem = this.buffer.find(
                (el) => el[this.itemKey] === $event.value[this.itemKey]
              );

              if (!existCachedItem) {
                this.buffer.push({ ...$event.value });
              }
            }
            value = this.value.filter(
              (el) => el[this.itemKey] !== $event.value[this.itemKey]
            );
          }
        } else {
          if ($event.checked) {
            value = [{ ...$event.value }];
          } else {
            value = [];
          }
        }

        this.$emit("change", value);
      },

      toggleAll($event) {
        if ($event.checked) {
          if (this.useCheckboxIf) {
            if (this.useBuffer) {
              const items = [];
              let compareItems = this.compareItems;

              this.compareItems.forEach((el) => {
                const showItem = compareItems.find((item) =>
                  this.showCheckbox(el)
                );
                const existCachedItem = this.buffer.find((item) =>
                  this.showCheckbox(el)
                );

                if (existCachedItem) {
                  items.push({ ...existCachedItem });
                  this.buffer = this.buffer.filter(
                    (el) => el[this.itemKey] !== existCachedItem[this.itemKey]
                  );
                } else {
                  items.push({ ...showItem });
                  compareItems = compareItems.filter(
                    (el) => el[this.itemKey] !== showItem[this.itemKey]
                  );
                }
              });

              this.$emit("change", items);
            } else {
              this.$emit(
                "change",
                this.items.filter((item) => this.showCheckbox(item))
              );
            }
            this.buffer = [];
          } else {
            this.$emit(
              "change",
              this.items.map((el) => ({ ...el }))
            );
          }
        } else {
          this.buffer = this.compareItems.map((el) => ({ ...el }));
          this.$emit("change", []);
        }
      },
      showCheckbox(item) {
        return this.useCheckboxIf ? this.showCheckboxIf(item) : true;
      },

      selectRow(item) {
        if (this.showSelectRow) {
          this.selectedRow = item;
          this.$emit("click-row", item);
        }
      },
    },
  };
</script>

<style lang="scss">
  .ui-data-table {
    width: 100%;
    text-align: left;

    &--tr-head {
      display: block;
    }
    table {
      width: 100%;
      border-spacing: 0;
    }
    tr {
      position: relative;
    }
    td,
    th {
      padding: $gap / 2 $gap / 3 $gap / 2 7px;
    }

    &--selected-row {
      background-color: #1ea4ff;
      color: white;
    }
  }
  .table_empty {
    width: 100%;
    background-color: $light-gray-color-2;
    color: $light-gray-color;
    padding: $gap;
  }
</style>
