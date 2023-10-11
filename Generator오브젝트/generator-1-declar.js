//-------------------------------------------------
// Generator 오브젝트
//-------------------------------------------------
// : function* 키워드를 사용한 함수를 제너레이터 함수 (Generator Function) 이라함.
//  아래 세가지 형태로 제너레이터 함수를 작성 할 수 있다.
//  - function* 선언문
//  - funxtion* 표현식
//  - GeneratorFunction ==> (new Function() 과 같으며, 파라미터에 지정된 문자열로 제너레이터 함수 생성.)
//-------------------------------------------------
// * 제너레이터 함수를 호출하면, 제너레이터 오브젝트를 생성하여 리턴함.
//-------------------------------------------------
//   --> 일반 function을 호출하면, 함수블록을 실행하는데 반해서
//   --> 제너레이터함수는 함수블록을 실행하지 않고, 제너레이터 오브젝트를 생성한 후 리턴함.
//   --> 생성된 제너레이터 오브젝트에 호출시 넘어온 파라미터값이 설정된다.
//-------------------------------------------------
// * 생성된 제너레이터 오브젝트는 이터레이터 오브젝트 이다.
//-------------------------------------------------
//   --> 이터레이터 오브젝트의 메서드를 호출했을 때 제너레이터 함수 블록을 실행함.
//   --> 제너레이터 함수 블록에 yield 키워드를 작성하면, 함수블록의 코드를 모두 실행하지 않고,
//   --> yield 키워드 단위로 나누어 실행한다.
//-------------------------------------------------
// * 제너레이터 하수는 new 연산자를 사용할 수 없다.(TypeError 발생)
//-------------------------------------------------





/*
---------------------------------------------------
1. function* 선언문 (선언문 형태로 제너레이터 함수 정의)
---------------------------------------------------
    :function* 키워드에 이어서 제너레이터 함수 이름을 작성
*/

function* functionName(param1 , param2){
    console.log('함수 블럭');
    yield param1 + param2;
};


// 제너레이터 함수의 typeof는 function 이다.
console.log(typeof functionName);
/* 출력 : function */

// 제너레이터 함수를 호출하면, 함수블록을 실행하지 않고,
// 제너레이터 오브젝트를 생성한 후 호출하면서 넘겨주는 파라미터 (1,2)를 param1과 param2 에 설정됨.
// --> 생성한 제너레이터 오브젝트를 사용하여, 제너레이터 함수를 호출했을 때 추가 처리를 하지 않아도 파라미터 값을 사용할 수 있다. 
let generatorObj = functionName(1,2);

console.log('generatorObj :: ', generatorObj);
/*출력 : generatorObj ::  functionName {<suspended>}*/



// Generator 오브젝트의 typeof 는  object 이다.
console.log('typeof generatorObj :: ',typeof generatorObj);
/*출력 : typeof generatorObj ::  object */

console.log(generatorObj.next());
/*출력 : 
함수 블럭   --> 이떄 제너레이터 함수가 실행되서 '함수 블럭' 출력됨.
{ value: 3, done: false }
*/



//이터레이터 오브젝트 ==> 이터러블 오브젝트에서 Symbol.iterator()를 호출하면 이터레이터 오브젝트를 생성하여 리턴함. 
//ex)
let a = "abc"; //String 은 이터러블 오브젝트
let iterableA = a[Symbol.iterator]();
console.log(typeof iterableA);
/* 출력 : object */ // ==> typeof 가 object 라는 것은 오브젝트에 next()메서드가 포함되어 있는것을 의미.


console.log(iterableA.next());
console.log(iterableA.next());
console.log(iterableA.next());
console.log(iterableA.next());
/*출력 
{ value: 'a', done: false }
{ value: 'b', done: false }
{ value: 'c', done: false }
{ value: undefined, done: true }
*/


console.log(generatorObj[Symbol.iterator]);