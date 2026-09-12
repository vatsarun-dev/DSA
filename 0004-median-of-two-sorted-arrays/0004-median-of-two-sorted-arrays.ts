function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let combine:number[] =[...nums1,...nums2].sort((a,b)=> a-b)
    let len = combine.length
    if(len%2!==0){
        let i =len-1
        return combine[Math.floor(i/2)]
    }
    let i=len-1
    let finalMedian = (combine[Math.floor(i/2)]+combine[Math.floor(i/2)+1])/2
    return finalMedian

};