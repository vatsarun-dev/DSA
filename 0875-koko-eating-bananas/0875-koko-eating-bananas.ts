function minEatingSpeed(piles: number[], h: number): number {
    let low=1, high=Math.max(...piles)
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        let sum=0
        for(let i=0;i<piles.length;i++){
            sum+=Math.ceil(piles[i]/mid)
        }
        if(sum<=h) high=mid-1
        else low=mid+1
    }
    return low
};