function removeElement(nums: number[], val: number): number {
let count:number=0
for(let i:number=0;i<nums.length;i++){
    if(nums[i]!==val){
        nums[count]=nums[i]
        count++
    }
}
return count
};