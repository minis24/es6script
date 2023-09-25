
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
let arrayObj = [1,2];
//이터레이션을 하려면 먼저 이터레이터 오브젝트를 생성해야 함.
let iterableObj = arrayObj[Symbol.iterator]();  //arrayObj.Symbol.iterator 형태로 작성할 수 없음.
// --> arrayObj의 Symbol.iterator()를 호출하면 이터레이터 오브젝트를 생성하여 리턴함. 
console.log("1::",typeof iterableObj);
console.log("2::",iterableObj.next());
console.log("3::",iterableObj.next());
console.log("4::",iterableObj.next());


/*
출력결과 : 
----------------------
1:: object          ==> Ojbect 라는 것은 오브젝트에 next()메서드가 포함되어 있는것을 의미.
2:: { value: 1, done: false }       ==> done: false 는 이터레이터가 종료되지 않았다는 것을 의미.
3:: { value: 2, done: false }
4:: { value: undefined, done: true }   ==>이터레이터로 읽은 값이 없다는 의미,  이터레이터가 종료되었음을 의미
----------------------
*/

