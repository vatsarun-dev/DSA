function minDays(bloomDay: number[], m: number, k: number): number {
    if (m * k > bloomDay.length) return -1;

    let min=Math.min(...bloomDay)
    let max=Math.max(...bloomDay)

    while(min<=max){
        let mid=Math.floor((min+max)/2)

        if(canMake(mid)) max=mid-1
        else  min=mid+1
    }
    return min

    function canMake(day:number):boolean{
        let flowers=0, boquet=0
        for(let i=0;i<bloomDay.length;i++){
            if(bloomDay[i]<=day){
                flowers++

                if(flowers ===k){
                    boquet++
                    flowers=0
                if(boquet>=m) return true
                } 
                          
            }else {flowers=0 }
        }
        return false
    }

};