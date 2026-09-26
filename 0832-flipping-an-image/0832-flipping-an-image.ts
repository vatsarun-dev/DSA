function flipAndInvertImage(a: number[][]): number[][] {
    for(let k=0;k<a.length;k++){
  let i=0, j=a[0].length-1

  while(i<=j){
    [a[k][i],a[k][j]]=[a[k][j],a[k][i]]
    i++,j--
  }
}

for(let i=0;i<a.length;i++){
  for(let j=0;j<a[i].length;j++){
  (a[i][j]!=0)?a[i][j]=0:a[i][j]=1  
  }
}
return a
};