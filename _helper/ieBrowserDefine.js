const ua = window.navigator.userAgent;
const versionSplit = /[\/\.]/i;
const versionRe = /(Version)\/([\w.\/]+)/i; // match for browser version
const operaRe = /(Opera|OPR)[\/ ]([\w.\/]+)/i;
const ieRe = /(?:(MSIE) |(Trident)\/.+rv:)([\w.]+)/i; // must not contain 'Opera'
let match = ua.match(operaRe) || ua.match(ieRe);

let name = '';
let versionMatch = null;
let version = null;

if (match) {
  match = match.filter((item) => item != null);
  name = match[1].replace('Trident', 'MSIE').replace('OPR', 'Opera');
  versionMatch = ua.match(versionRe) || match;
  version = versionMatch[2].split(versionSplit);
}

export default { name, version };
