function threeSum(a: number[]): number[][] {
    let sum:number=0
    let ans:number[][]=[]
    a.sort((x,y)=>x-y)
    for(let i=0;i<a.length;i++){
        let j=i+1, k= a.length-1
        if(i>0 && a[i]==a[i-1]) continue
        while(j<k){
            sum=a[i]+a[j]+a[k]
            if(sum>0) k--
            else if(sum<0) j++
            else{
                ans.push([a[i],a[j],a[k]])
                j++,k--

                while(j<k && a[j]==a[j-1]) j++
            while (j < k && a[k] === a[k + 1]) k--
            }
            
        }
    }
    return ans
};