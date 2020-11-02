// inerable  : 可以使用for of  遍历的统一集合类型，包括Array，map ,set,
arr = [1,8,6,4,9]
for(key of arr){
    console.log(key)
}
var map=new Map([
    ["a",1],
    ["b",2],
    ["c",3]
])
for(let item of map.entries()){
    console.log(item)
}
let set = new Set(['a','8','p','5'])
for(item of set.entries()){
    console.log(item)
}