function removeDuplicates(a: number[]): number {
let count:number =1
for(let i:number=1;i<a.length;i++){
    if(a[i]!==a[count-1]){
        a[count]=a[i]
        count ++
    }
}
return count

};