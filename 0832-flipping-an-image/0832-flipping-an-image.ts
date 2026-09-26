function flipAndInvertImage(a: number[][]): number[][] {
    for(let k=0;k<a.length;k++){
  let i=0, j=a[0].length-1

  while(i<=j){
   let temp=a[k][i]
   a[k][i]=1-a[k][j]
   a[k][j]=1-temp
   i++,j--
  }
}

return a
};