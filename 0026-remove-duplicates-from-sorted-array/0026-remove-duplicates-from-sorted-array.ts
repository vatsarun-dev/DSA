function removeDuplicates(array: number[]): number {
let i = 0,
  j = 1;
while (i < array.length) {
  if (array[i] === array[j]) {
    array.splice(j, 1);
  } else (i++, j++);
}
return array.length

};