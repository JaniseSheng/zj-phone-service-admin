export const sortBy_asc = (array, key) =>{
    const sortBy = (a , b)=>{
      const compare = a[key].localeCompare(b[key])
      if (compare === '0') return;
      return compare
    }
    return array.sort(sortBy)
}

export const sortBy_desc = (array, key) =>{
  const sortBy = (a , b)=>{
    const compare = b[key].localeCompare(a[key])
    if (compare === '0') return;
    return compare
  }
  return array.sort(sortBy)
}
