function spiralOrder(a: number[][]): number[] {
    let ans:number[]= []
    let minR=0, maxR= a.length-1
    let minC=0, maxC=a[0].length-1
    while(minR<=maxR && minC <=maxC){
        /** FOR LEFT -> RIGHT  */
        for(let i=minC;i<=maxC;i++){
            ans.push(a[minR][i])
        }
        minR++
        /** FOR TOP -> BOTTOM */
        for(let i=minR;i<=maxR;i++){
            ans.push(a[i][maxC])
        }
        maxC--

        /** FOR RIGHT -> LEFT */
        if(minR<=maxR){
            for(let i=maxC;i>=minC;i--){
                ans.push(a[maxR][i])
            }
            maxR--
        }

        /** FOR BOTTOM -> TOP */
        if(minC<=maxC && minR <= maxR){
            for(let i=maxR;i>=minR;i--){
                ans.push(a[i][minC])
            }
            minC++
        }
    }
    return ans
};