function removeDuplicates(array: number[]): number {
  let i=0
  while(i<array.length){
    if(array[i]==array[i+1]) array.splice(i,1)
    else i++
  }
  return array.length
}