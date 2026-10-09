/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(a: number[]): void {
    let i=0,j=a.length-1,k=0
    while(k<=j){
        if(a[k]==0){
            [a[i],a[k]]=[a[k],a[i]]
            i++,k++
        }
       else if(a[k]==2){
            [a[j],a[k]]=[a[k],a[j]]
            j--
        }
        else k++
    }
};