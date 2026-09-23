function check(a: number[]): boolean {
    let drop:number=0
    for(let i:number=0;i<a.length;i++){
        if(a[i]>a[(i+1)%a.length]) drop++
    }
    return (drop===1 || drop ===0)?true:false
};