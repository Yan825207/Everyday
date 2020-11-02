// 6.现在有2个数组，var arr1 = [1,7,9,11,8,15,10,19],
// var arr2 =[2,1,6,8,10]将2个数组合并为一个数组，并将数组去重，然后按照升序进行排列
var arr1 = [1,7,9,11,8,15,10,19]
var arr2 =[2,1,6,8,10]
arr3=[].concat(arr1,arr2)
for(var i=0;i<arr3.length;i++){
    for(var j=0;j<arr3.length;j++){
        if(arr3[j]==arr3[i]&&i!=j){
          arr3.splice(j,1)
        //   arr3.sort(function （a,b) { })  
        arr3.sort(function(a,b) {return a-b})    
        }
    }
}
console.log(arr3)