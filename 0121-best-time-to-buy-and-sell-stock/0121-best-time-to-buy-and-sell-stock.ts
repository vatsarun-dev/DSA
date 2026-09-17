function maxProfit(a: number[]): number {
    let min:number=a[0]
    let max:number=0
    for(let i:number=0;i<a.length;i++){
        if(a[i]<min){
            min=a[i]
        }
        else{
            let diff=a[i]-min
            max=Math.max(diff,max)
        }
    }
    return max
};