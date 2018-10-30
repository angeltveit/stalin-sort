Array.prototype.stalinSort = function(cb) {
  if(!cb) {
    return this.filter((i, index) => (''+i)
      .localeCompare(''+(index < this.length ? this[index + 1] : i)) < 0)
  }
  return this.filter((a, index) => {
    const b = index < this.length ? this[index + 1] : index
    return cb(a, b) < 0
  })
}
