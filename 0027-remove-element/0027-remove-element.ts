function removeElement(a: number[], val: number): number {
let count:number=0
for(let i:number=0;i<a.length;i++){
    if(a[i]!==val){
        a[count]=a[i]
        count++
    }
}
return count
};