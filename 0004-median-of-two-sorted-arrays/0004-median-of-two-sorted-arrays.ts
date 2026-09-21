function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
 let total:number=nums1.length+nums2.length
 let middle:number=Math.floor(total/2)
 let i:number=0, j:number=0, current:number =0, previous:number=0
 for(let k:number=0;k<=middle;k++){
    previous=current
    if(i<nums1.length && (j>=nums2.length || nums1[i]<nums2[j])) current=nums1[i++]
    else current =nums2[j++]
 }
 if(total%2 ===1) return current
 return (previous+current)/2
};