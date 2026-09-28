function fourSum(a: number[], target: number): number[][] {
    let ans:number[][]=[]
    let sum=0
    a.sort((x,y)=>x-y)
    for(let i=0;i<a.length-3;i++){
        if(i>0 && a[i]==a[i-1]) continue
        for(let j=i+1;j<a.length-2;j++){
            let k=j+1,l=a.length-1
            if(j>i+1 && a[j]==a[j-1]) continue
            while(k<l){
                sum=a[i]+a[j]+a[k]+a[l]
                if(sum>target) l--
                else if(sum<target) k++
                else{
                    ans.push([a[i],a[j],a[k],a[l]])
                    k++,l--

                    while(k<l && a[k]==a[k-1]) k++
                    while(k<l && a[l]==a[l+1]) l--
                }
            }
        }
    }
            return ans

};