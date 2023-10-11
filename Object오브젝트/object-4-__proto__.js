// __proto__
// __proto__에 있는 메서드는 "오브젝트.메서드()" 형태로 호출가능.
// prototypep에 있는 메서드는 "Object.prototype.메서드.call(인스턴스)" 형태로 호출해야함.



let TempClass = function(){
    this.member = 11;
};
TempClass.prototype.getMember = function(){return this.member;};


let instance = new TempClass();
console.log(instance.__proto__ === TempClass.prototype);
/* 출력 : true */

console.log(TempClass.prototype.getMember.call(instance)); 
/*출력 : 11 */

console.log(instance.getMember());  
/*출력 : 11 */


let b = new TempClass();
console.log(b.getMember());  
/*출력 : 11 */




/*


    [구문] 
    오브젝트.__proto__

    __proto__ 에 new 연산자로 생성한 인스턴스 또는 다른 오브젝트의 prototype에 연결된 프로퍼티가 첨부됨.
    ES6 스펙에 __proto__ 와 Object.prototype.__proto__ 가 분리되어 있지만
    스펙구성상의 분리되어 있는것일뿐, __proto__와 동일하다고 봐도 무방하다.

    Object 에는 prototype 프로퍼티 존재
    인스턴스 에는 prototype 프로퍼티 없음.

    -----------------------
    !! 인스턴스를 생성하면, !!
    -----------------------
    오브젝트의 prototype에 연결된 프로퍼티가 인스턴스의 __proto__에 첨부된다.
    --> prototype에 연결된 메서드를 인스턴스 메서드로 호출가능함.
*/

let a  = new Object();
console.log (a.__proto__); 
/*출력 : {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …} */


console.log(a.prototype);
/* 출력 : undefined */

console.log(Object.prototype);
/*출력 : {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …} */



// __proto__ 는 액세서 프로퍼티
// getter __proto__ , setter __proto__ 가 있음.
//  ==> __proto__가 setter 이므로, __proto__에 메서드를 추가할 수 있음.
//  ==> __proto__에 추가된 메서드는 원본 오브젝트의 prototype 에 참조되며, 관련된 모든 인스턴스에서 참조 가능하도록 연결됨.
// -------------------------------------------------------------------------------------
// BUT! 개발자 코드로 __proto__에 메서드를 추가하는것은 권장하지 않고, 스펙에서는 사용하지 않도록 부록에 기술한 의미가 있음.
//--------------------------------------------------------------------------------------
// __proto__ 프로퍼티는 [[Enumerable]]:false  이고, [[configurable]]:true 이다.





let OtherClass = function(){
    this.member = 20;
};

// (1) OtherClass 에 prototype 에 get 메서드 연결
OtherClass.prototype.get = function(){
    return this.member;
}


// (2) new 로 인스턴스를 생성해서 otherInstance 에 할당하고.
//  __proto__ 에 get 메서드가 참조된다.
let otherInstance = new OtherClass ();



// (3) otherInstance의 __proto__에 set 메서드를 추가한다.
//  --> 실제로는 OtherClass.prototype에 추가되는 것임.
//  --> OtherClass 로 생성한 다른 인스턴스에서도 set 메서드를 공유하기 때문.
otherInstance.__proto__['set'] = function(param) {
    this.member = param
};

console.log(otherInstance.get());
/* 출력 : 20 */


//실제로 호출되는 메서드는 prototype에 있는 메서드가 호출되는것임.
// ==> set 메서드는 __proto__에 있지만, __proto__는 프로퍼티 검색과 경로를 제공하기 위한 것으ㅗ
// ==> 실제홏출되는 메서드는 인스턴스를 생성한 OtherClass.prototype 에 연결된 메서드이다. 
otherInstance.set(22);
console.log(otherInstance.get());
/* 출력 : 22 */


// otherInstance의 __proto__에 set 메서드를 추가했는데
// OtherClass.prototype.set 으로 코드가 출력이 되는건 실제로 OtherClass.prototype 에 추가가 되었기 때문이다. 
let result = OtherClass.prototype.set;

console.log('result :: ',result);
/*출력 :
result ::  ƒ (param) {
    this.member = param
}
*/
