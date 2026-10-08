function findMaxConsecutiveOnes(nums: number[]): number {
    let max = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            if(max > sum){
                max = max;
            } else {
                max = sum;
            }
            sum = 0;
            
        } else {
            sum += nums[i];
           
        }
    }

    if (max > sum){ 
        return max;
     } else {
         return sum; 
    }
};