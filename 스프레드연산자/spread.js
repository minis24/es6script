/*
스프레드 연산자는 이터러블 오브젝트의 엘리먼트를 하나씩 분리하여 전개합니다.
전개한 결과를 변수에 할당하거나, 호출하는 함수의 파라미터 값으로 사용할 수 있습니다.

[구문]
[...iterableObject]
function(...iterableObject)

스프레드 연산자는 "..."과 같이 점(.)세개를 연속해서 작성하고 이어서 이터러블 오브젝트를 작성함.
(1) [...iterableObject] ==> [...[1,2]] 와 같이 대괄호 안에 작성하거나,
(2) function(...[1,2])와 같이 호출하는 함수의 파라미터에 작성 할 수 있습니다.

*/

let one = [11,12];
let two = [21,22];

let spreadObj = [51,...one,52,...two];
console.log('spreadOPbj :: ' ,spreadObj);



/* 대괄호[] 안에 spread 연산자로 문자열을 작성한 형태 */
let spreadStr = [..."music"];
console.log('spreadStr :: ',spreadStr);



/* 
함수 파라미터 
호출하는 함수의 파라미터 값을 spread 연산자로 작성하면, 함수를 호출하기 전에 파라미터 값을 분리,전개합니다.
호출받은 함수의 파라미터에 이름을 작성하면 전개한 각 엘리먼트 값이 파라미터 이름에 설정됨.
*/

const values = [10,20,30];
get(...values);

//호춮하는 함수의 파라미터 값이 분리된 형태를 spread 파라미터라고 함.
function get(one,two,three,f){
    console.log(one + two + three+f);
}