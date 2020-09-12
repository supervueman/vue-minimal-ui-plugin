function ieDefine() {
  if (process.client) {
    const ua = window.navigator.userAgent;
    const versionSplit = /[\/\.]/i;
    const versionRe = /(Version)\/([\w.\/]+)/i; // match for browser version
    const ieRe = /(?:(MSIE) |(Trident)\/.+rv:)([\w.]+)/i; // must not contain 'Opera'
    let match = ua.match(ieRe);

    let name = '';
    let versionMatch = null;
    let version = null;

    if (match) {
      match = match.filter((item) => item != null);
      name = match[1].replace('Trident', 'MSIE');
      versionMatch = ua.match(versionRe) || match;
      version = versionMatch[2].split(versionSplit);
    }
    return { name, version };
  }
  return {};
}

export default ieDefine();
