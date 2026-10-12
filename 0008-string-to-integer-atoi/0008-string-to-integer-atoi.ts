function myAtoi(s: string): number {
   let sign=1, result=0,start=0
   s=s.trim()
   if(s.charAt(0)=="-"){
    sign=-1
    start=1
   }
   else if(s.charAt(0)=="+") start=1
   for(let i=start;i<s.length;i++){
    let digit=+s.charAt(i)
    if(s.charAt(i) <"0" || s.charAt(i) >"9") break
       if (
            result > Math.floor(2147483647 / 10) ||
            (result === Math.floor(2147483647 / 10) &&
             digit > 7)
        ) {
            return sign === 1 ? 2147483647 : -2147483648
        }
    result = result *10 + digit
   }
    return result*sign
    
};