function sortPeople(names: string[], heights: number[]): string[] {
 let map:Map<number,string>=new Map(), result:string[]=[]
 for(let i =0;i<heights.length;i++) map.set(heights[i],names[i])
 heights.sort((a,b)=>b-a)
for(let i of heights) result.push(map.get(i)!)
return result
};