function searchRange(a: number[], target: number): number[] {
    function binarySearch(findSearch:boolean):number{
        let i=0,j=a.length-1, ans=0
        while(i<=j){
            let mid=Math.floor((i+j)/2)
            if(target ==a[mid]){
                ans=mid
                if(findSearch) j=mid-1
                else i=mid+1
            }
            else if(target>a[mid]) i=mid+1
            else j=mid-1
        }
        return (a[ans]==target)? ans:-1
    }
    let first =binarySearch(true)
    let last =binarySearch(false)
    return [first,last]
};