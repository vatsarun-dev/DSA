function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let combine:number[] =[...nums1,...nums2].sort((a,b)=> a-b)
    let len = combine.length
    if(len%2!==0){
        let i =len-1
        let median = Math.floor(i/2)

        return combine[median]
    }
    let i=len-1
    let median =Math.floor(i/2)
    let nextMedian =median+1
    let finalMedian = (combine[median]+combine[nextMedian])/2
    return finalMedian

};