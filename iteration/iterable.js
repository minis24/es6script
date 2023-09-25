let arrayObj = [];
let result = arrayObj[Symbol.iterator];
console.log(result)

/*
출력결과 : 
----------------------
[Function: values]
----------------------
*/

let objectObj = {};
let res = objectObj[Symbol.iterator];
console.log(res)

/*
출력결과 : 
----------------------
[Function: values]
----------------------
*/