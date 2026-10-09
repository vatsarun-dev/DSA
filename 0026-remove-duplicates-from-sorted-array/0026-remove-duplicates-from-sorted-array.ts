function removeDuplicates(a: number[]): number {
    let i=0, j=1
    while(j<a.length){
        if(a[i]!=a[j]){
            i++
            a[i]=a[j]
        }
        else j++
    }
    return i+1
};