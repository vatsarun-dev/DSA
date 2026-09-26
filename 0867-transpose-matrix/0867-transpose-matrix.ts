function transpose(a: number[][]): number[][] {
   let row=a.length, col= a[0].length
   let temp:number[][]= new Array(col)
   for(let i=0;i<col;i++){
    temp[i]= new Array(row)
   }

   for(let i=0;i<a.length;i++){
    for(let j=0;j<a[i].length;j++){
        temp[j][i]=a[i][j]
    }
   }
   return temp
};