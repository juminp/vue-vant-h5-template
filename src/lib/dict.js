const filter = obj => {
  const _arr = []
  for (const attr in obj) {
    _arr.push({
      name: obj[attr],
      value: attr
    })
  }
  return _arr
}

export { filter }
