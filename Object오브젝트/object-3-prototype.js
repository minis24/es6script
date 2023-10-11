
//-----------------------------------------------
//1. setPrototypeOf() : __proto__ 에 첨부.
//  ==> 첫번째 파라미터를 리턴함.
//-----------------------------------------------

let Sports = function(){};
Sports.prototype.getCount = function(){
    return 123;
}

// * 첫번쨰 파라미터 : 오브젝트 또는 인스턴스 설정 
//   (오브젝트에 프로퍼티를 추가(확장)이 가능해야함. )
//    --> Object.isExtensible 결과가 false 이면, TypeError 발생
// * 두번쨰 파라미터 : 오브젝트 또는 null 을 설정 ()
//   (두번쨰 파라미터의 prototype을 지정해야 사용의도에 적합함.)
//    --> 첫번째 파라미터의 __proto__에 두번째 파라미터를 첨부하는 것은
//    --> "첫번째 오브젝트.methodName()"  형태로 호출 하려는 목적이므로,
//    --> prototype 을 지정하는게 의도에 적절함.

let prtoObj = Object.setPrototypeOf({},Sports.prototype);
// --> 두번쨰 파라미터인 Sports.prototype에 연결된 프로퍼티를 
// --> 첫번째 프로퍼티인 Object 오브젝트의 __proto__에 첨부한다.

console.log('prtoObj.getCount() :: ', prtoObj.getCount());
/* 출력 : prtoObj.getCount() ::  123 */




// -------------------------------------------------------------------------------------
// * Sports 인스턴스를 브라우저 콘솔에서 출력시 계층구조.
// -------------------------------------------------------------------------------------
// (1) protoObj에  __proto__ 가 연결되어 있으며, ( [[prototype]] 과 __proto__가 동일함 )
// (2) __proto__ 에 Sports.prototype의 constructor와 getCount 가 연결되어 있음.
// (3) Sports.prototype 을 출력하면 : {getCount: ƒ,  constructor: ƒ}
// -------------------------------------------------------------------------------------
// ==> protoObj의 __proto__에 getCount가 연결되어 있으므로, protObje.getCount() 로 호출이 가능함
// -------------------------------------------------------------------------------------

/* 
Sports {}
    [[Prototype]]: Object
        getCount: ƒ ()
            arguments: null
            caller: null
            length: 0
            name: ""
            prototype: {constructor: ƒ}
            [[FunctionLocation]]: VM201:2
            [[Prototype]]: ƒ ()
            [[Scopes]]: Scopes[2]
        constructor: ƒ ()
            [[Prototype]]: Object
*/




//------------------------------------------------
//두번째 파라미터에 prototype을 설정하지 않은경우
//------------------------------------------------
let Sports2 = function(){};
Sports2.prototype.getCount = function(){
    return 123;
}

// setPrototypeOf() 호출시 두번쨰 파라미터에 .prototype 이 아닌경우 .prototype에 연결된 메서드를 직접 호출이 불가능함.
let fnObj = Object.setPrototypeOf({},Sports2);


//fnObj.getCount 출력결과가 undefined 이므로, fnObj의 __proto__에 getCount 가 없다는 의미.
//-------------------------------------------------------------------------------
// setPrototypeOf() 호출시 두번쨰 파라미터에 .prototype 이 아닌경우 .prototype에 연결된 메서드를 직접 호출이 불가능함.
// 풀경로로 호출 : fnObj.prototype.getCount.call(Sport2)
console.log('fnObj.getCount :: ', fnObj.getCount);
/*출력 : fnObj.getCount() ::  undefined */

console.log('fnObj.prototype.getCount.call(Sports2) :: ', fnObj.prototype.getCount.call(Sports2));
/*출력 : fnObj.prototype.getCount.call(Sports2) ::  123 */


