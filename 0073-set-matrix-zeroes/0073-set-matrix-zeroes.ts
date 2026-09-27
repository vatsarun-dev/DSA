/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let col:number[]= new Array(matrix[0].length)
    let row:number[]= new Array(matrix.length)
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]==0){
                row[i]=1
                col[j]=1
            }
        }
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(row[i]||col[j]) matrix[i][j]=0
        }
    }
};