const fibonacci = require('./lib/fibonacci')
// console.log(c(1));
//console.log("hello world!");
//  function isLeapYear(n) {
//      if(n % 400 == 0){
//         return true
//      }
//      if(n % 100 ==0){
//         return false
//      }
//      if(n % 4 == 0){
//          return true
//      }
//      return false
//  }
//  console.log("2000:" + isLeapYear(2000));
//  console.log("1900:" + isLeapYear(1900));

// function getNthFibonacci(count) {  
//     var count = count * 1, //如果为其他类型，则转int型  
//         tailFactorial = function(curr, next, count) {  
//             if (count === 0) {  
//                 return curr;  
//             } else {  
//                 return tailFactorial(next, curr + next, count - 1); //尾递归采用函数，可有效解决栈溢出问题  
//             }  
//         };  
//     return tailFactorial(1, 1, count);  
// }  
for(var i=0;i<20;i++){
    console.log(fibonacci(i));
}
var len =20;
// for(;len--;){
//     console.log(fibonacci(len));
// }

