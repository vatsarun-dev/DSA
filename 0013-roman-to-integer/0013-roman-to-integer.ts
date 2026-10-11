function romanToInt(s: string): number {
    let result=0
   function value(ch:string):number{
     switch(ch){
        case "I" : return 1
        case "V" : return 5
        case "X" : return 10
        case "L" : return 50
        case "C" : return 100
        case "D" : return 500
        case "M" : return 1000
       }
       return 0
   }
    for(let i=0;i<s.length;i++){
        let current=value(s[i])
        let next =i+1 <s.length?value(s[i+1]):0
        if(current <next) result-=current
        else result+=current
    }
    return result

};