
/*
 * 이터러블 오브젝트
 * --> String,Array,Map,Set,TypedArray,Argument 오브젝트는 디폴트로 이터러블 프로토콜을 가지고 있음.
 * --> 위와 같은 오브젝트는 자바스크립트 엔진이 렌더링 될때 이터러블 프로토콜이 설정됨. (사전처리 없이도 반복처리 가능함)
 * --> 이터러블 프로토콜이 설정된 오브젝트를 이터러블 오브젝트라고 함.
 * --> 이터러블 오브젝트에는 Symbol.iterator가 있어야함. 
 * --> 오브젝트에 Symbole.iterator가 있으면 이터러블 오브젝트임.
 * --> 자체오브젝트에는 없지만 상속받은 ptototype chain 에 있어도 이터러블 오브젝트가 됨.
*/


//이터러블 오브젝트 여부 확인
// Symbol.iterator 존재여부 확인.
let arrayObj = [];
let result = arrayObj[Symbol.iterator];  //arrayObj.Symbol.iterator 형태로 작성할 수 없음.
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
undefined
----------------------
*/



