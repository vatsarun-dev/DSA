function maxArea(height: number[]): number {
    let left=0
    let right=height.length-1
    let maxWater=0
    while(left<right){
       let area = Math.min(height[left],height[right]) *(right-left)
        maxWater= Math.max(maxWater,area)

        height[left]<height[right]? left++ : right-- 
    }
    return maxWater
};