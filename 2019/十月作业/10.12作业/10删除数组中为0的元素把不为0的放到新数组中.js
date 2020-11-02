// 10.  需求    ：  var oldArr[]={1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5}; 
//                  要求将以上数组中的0项去掉，将不为0的值存入一个新的数组，生成新的数组为 
//                   var newArr=[1,3,4,5,6,6,5,4,7,6,7,5];
            //   分析：  定义两个数组，， 
            // 循环数组一
            // 如果元素值为0则散出，将不为0的值存入一个新的数组二
            var oldArr= [1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5]
            var newArr =[]
        for(var i=0;i<oldArr.length;i++){
            if(oldArr[i]!==0){
                newArr.push(oldArr[i]) 
            }
            
        }
        
        console.log(newArr)
    