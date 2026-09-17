function rearrangeArray(nums: number[]): number[] {
  const result: number[] = new Array(nums.length);
  let positiveIndex = 0;
  let negativeIndex = 1;

  for (const number of nums) {
    if (number > 0) {
      result[positiveIndex] = number;
      positiveIndex += 2;
    } else {
      result[negativeIndex] = number;
      negativeIndex += 2;
    }
  }

  return result;
}

export default rearrangeArray;
