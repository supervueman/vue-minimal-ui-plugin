import _Vue from 'vue';

/* ==============================================
 * ================= Layouts ====================
 */
import UiLayout from "./layouts/UiLayout";
import UiContainer from "./layouts/UiContainer";
import UiToolbar from "./layouts/UiToolbar";
// Card
import UiCard from "./layouts/UiCard/UiCard";
import UiCardHeader from "./layouts/UiCard/UiCardHeader";
import UiCardMedia from "./layouts/UiCard/UiCardMedia";
import UiCardContent from "./layouts/UiCard/UiCardContent";
import UiCardActions from "./layouts/UiCard/UiCardActions";
// Dialog
import UiDialog from "./layouts/UiDialog";
// List
import UiList from "./layouts/UiList/UiList";

/* ==============================================
 * ================= Components =================
 */
import UiAlert from "./components/UiAlert";
import UiLink from "./components/UiLink/index";
import UiButton from "./components/UiButton/index";
import UiInput from "./components/UiInput";
import UiInputSearch from "./components/UiInputSearch/UiInputSearch";
import UiFileInput from "./components/UiFileInput";
import UiCheckbox from "./components/UiCheckbox";
import UiTextarea from "./components/UiTextarea";
import UiSelect from "./components/UiSelect";
import UiImage from "./components/UiImage";
import UiIcon from "./components/UiIcon";
import UiDivider from "./components/UiDivider";
import UiDataTable from "./components/UiDataTable/UiDataTable";
import UiPagination from "./components/UiPagination";
import UiTabs from "./components/UiTabs/UiTabs";
import UiExpansionPanels from "./components/UiExpansionPanels/UiExpansionPanels";
import UiExpansionPanel from "./components/UiExpansionPanels/UiExpansionPanel";
import UiMenu from "./components/UiMenu/UiMenu";
import UiSearch from "./components/UiSearch";
import UiDragAndDropFile from "./components/UiDragAndDropFile";
import UiScrollPagination from "./components/UiScrollPagination";

export default {
  install(Vue: typeof _Vue) {
    Vue.mixin({
      components: {
        // Layouts
        UiLayout,
        UiContainer,
        UiToolbar,
        // Card
        UiCard,
        UiCardHeader,
        UiCardMedia,
        UiCardContent,
        UiCardActions,
        // Dialog
        UiDialog,
        // List
        UiList,
        // Components
        UiAlert,
        UiLink,
        UiButton,
        UiInput,
        UiInputSearch,
        UiFileInput,
        UiCheckbox,
        UiTextarea,
        UiSelect,
        UiImage,
        UiIcon,
        UiDivider,
        UiDataTable,
        UiPagination,
        UiTabs,
        UiExpansionPanels,
        UiExpansionPanel,
        UiMenu,
        UiSearch,
        UiDragAndDropFile,
        UiScrollPagination
      },
    });
  }
};
