   // 4. 写一个函数，输入某年某月某日，判断这一天是一年中的第几天   1998  3   1
   // 定义函数
   function day(n,y,r){
      // 判断是否是闰年
      if(n%4==0&&n%100!=0||n%400==0){
         
         // 闰年2月天数有29
         var two=29
      }else{
         two=28
      }
      // 定义变量接受天数
      var sum=0
      // 循环月份
      for(var i=1;i<y;i++){
         // 判断有有31一天的月份和有30天的月份
         if(i==1||i==3||i==5|i==7|i==8||i==10||i==12){
                 sum+=31
         }else if(i == 4 || i == 6 || i == 9 || i == 11){
            sum+=30
         }
         if(i==2){
            sum+=two
         }
      }
      sum+=r
      return sum
   }
   console.log(day(2000,3,1))