function diagonalSum(a: number[][]): number {
    let sum:number=0
    for(let i=0;i<a.length;i++){
        sum+=a[i][i]
        if(i!= a.length-1-i) sum+=a[i][a.length-1-i]
    }
    return sum
};