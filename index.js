'use strict';

(function setup() {
  const isAry = Array.isArray;
  const emAry = [];
  const emObj = {};

  function lcStr(s) { return s.toLowerCase(); }

  const EX = function stringStripPrefixes(prefixes, opt, input) {
    if (!isAry(prefixes)) { return EX(emAry, prefixes, opt); }
    if (!opt) { return opt; }
    const tOpt = typeof opt;
    if (tOpt === 'string') { return EX(prefixes, emObj, opt); }
    if (tOpt !== 'object') {
      throw new TypeError('Options object `opt` must be an object!');
    }
    if (!input) { return input; }
    let allPrefixes = prefixes.concat(opt.prefixes).filter(Boolean);
    if (!allPrefixes.length) { return input; }
    const { ignoreCase } = opt;
    let cmpStr = String(input);
    if (ignoreCase) {
      cmpStr = lcStr(cmpStr);
      allPrefixes = allPrefixes.map(lcStr);
    }
    let cutLen = 0;
    let again = true;

    function tryStrip(p) {
      const l = p.length;
      const a = cmpStr.slice(cutLen, cutLen + l);
      // console.debug('# ?', { p, l, a }, (a === p));
      if (a === p) {
        cutLen += l;
        again = true;
      }
    }

    while (again) {
      again = false;
      allPrefixes.forEach(tryStrip);
    }

    if (cutLen === 0) { return input; }
    return input.slice(cutLen);
  };




















  (function unifiedExport(e) {
    /* globals window: true, define: true */
    const d = ((typeof define === 'function') && define);
    const m = ((typeof module === 'object') && module);
    if (d && d.amd) { d(function f() { return e; }); }
    if (m && m.exports) { m.exports = e; }
    if (d || m) { return; }
    const w = ((typeof window === 'object') && window);
    if (w) { w.stringStripPrefixes = e; }
  }(EX));
}());
