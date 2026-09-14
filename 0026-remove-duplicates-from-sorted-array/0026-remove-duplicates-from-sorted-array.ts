function removeDuplicates(a: number[]): number {
let copy =[...a]
for(let i=0;i<a.length;i++){
  let j=i+1
  while(j<a.length){
    if(a[i]==a[j]){
     a.splice(j,1)
    }
    else{
      j++
    }
  }
}
 copy =[...a,...Array(copy.length-a.length).fill("_")]
return a.length
};