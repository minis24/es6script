/*
    GeneratorFunction():제너레이터 함수 생성
*/

//----------------------------------------------------------------------------------
//new 연산자로 GeneratorFunction() 함수를 호출 할 수 없음.
//----------------------------------------------------------------------------------
//Anonymous 로 제너레이터 함수를 생성하고, 여기에 연결된 constructor를 사용하여 제너레이터 함수를 생성.

let GenConstructor = Object.getPrototypeOf(function*(){}).constructor;
// ==> function*(){} 으로 익명으로 제너레이터함수를 생성하고,
// ==> Object.getPrototypeOf함수로 prototype 오브젝트를 구함.
// ==> prototype 아래에 constructor가 있으므로 GerConstructor는 생성자 함수가 된다.


let genFunction = new GenConstructor('param1','param2','console.log("함수블록");yield param1 + param2');
// ==> new 연산자로 GenConstructor 생성자를 호출하여 제너레이터 함수를 생성합니다.
/* (ex)
    function Music(){} 에서 new Music() 를 실행하면,
    Music.prototype.constructor가 호출되어 인스턴스를 생성하는것과 같음. 
*/

// ==> GenConstructor의 파라미터로 제너레이트 함수에서 사용될 파라미터와 함수블록을 문자열로 작성함.
// ==> 파라미터를 1개만 작성하면, 함수블록 코드가 되며, 파라미터가 없는 형태가 된다.
/*
    파라미터의 문자열을 파싱하면,
    ƒunction* (param1,param2) {
        console.log("함수블록");
        yield param1 + param2;
    }
*/

let genObj = genFunction(20,30);
console.log(genObj.next());

/* 출력 결과 :
함수블록
{ value: 50, done: false }
*/


