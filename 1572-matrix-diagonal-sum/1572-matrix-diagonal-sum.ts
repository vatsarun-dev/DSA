function diagonalSum(a: number[][]): number {
    let sum:number=0
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a[i].length;j++){
            if(i==j || i+j == a[i].length-1) sum+=a[i][j]
        }
    }
    return sum
};