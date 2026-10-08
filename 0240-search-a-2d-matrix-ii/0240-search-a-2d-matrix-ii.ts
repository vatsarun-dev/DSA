function searchMatrix(a: number[][], target: number): boolean {
let row=0, col=a[0].length-1
while(row< a.length && col>=0){
    let value=a[row][col]
    if(value === target) return true
    else if(value >target) col--
    else row++
}
return false
};