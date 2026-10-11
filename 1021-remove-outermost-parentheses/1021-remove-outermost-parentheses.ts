function removeOuterParentheses(s: string): string {
    let result:string="", count=0
    for(let i of s){
        if(i =="("){
            if(count!=0){
                result+=i
                
            }
            count++
        }
        else{
            count--
            if(count!=0){
                result+=i
            }
        }
    }
    return result
};