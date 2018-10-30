Array.prototype.stalinSort = function(cb=(a, b) => (a+'').localeCompare(b)) {
  return this.slice(1).reduce((b, a) => b.concat(~cb(a, b[b.length-1]) ? [a] : []), this.slice(0, 1))
}
