function shipWithinDays(a: number[], days: number): number {
    let low= Math.max(...a), n=a.length
    let high=a.reduce((sum,x)=> sum+x,0)
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        if(canShip(mid)) high=mid-1
        else low=mid+1
    }
    return low

   function canShip(cap:number):boolean{
    let sum=0,day=1
    for(let i=0;i<n;i++){
       if(sum+a[i]<=cap) sum+=a[i]
       else{
        day++, sum=a[i]
       }
    }
    return day<=days
   }
};