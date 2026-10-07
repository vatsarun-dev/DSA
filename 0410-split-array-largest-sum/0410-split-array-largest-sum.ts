function splitArray(nums: number[], k: number): number {
    let low =Math.max(...nums)
    let high=nums.reduce((a,b)=> a+b)
    while(low<high){
        let mid=Math.floor((low+high)/2)
        let subArray=1, currentSum=0
        for(let num of nums){
            if(currentSum+num >mid){
                subArray++
                currentSum=num
            }
            else currentSum+=num

        }
        if(subArray <=k) high=mid
        else low=mid+1
    }
    return low

};