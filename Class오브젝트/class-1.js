/*-----------------------------------------
Class 
-------------------------------------------
[특징]
    - "use strict" 를 선언하지 않아도 strict 모드에서 실행. 
        ==> stict 모드에서는 eval(), with() 문을 사용할 수 없다.
        ==> 그리고, var 키워드를 사용하지 않고, 변수 선언 불가, let 변수로 해결.
    
    - function 으로 작성하면, 글로번 오브젝트에 설정되지만, class 오브젝트는 글로벌 오브젝트에 설정되지 않음.
        ==> 따라서 window.Member로 클래스에 접근하면 undefined 가 리턴됨.
    
    - class 오브젝트의 프로퍼티는 for()문으로 열거 할 수 없다.


[구문]
1. 클래스 선언문으로 작성
2. 클래스 표현식으로 작성
*/

// 엔진이 function 키워드를 만나면 Function오브젝트를 생성하듯이
// class 키워드를 만나면 Class오브젝트를 생성한다.


//1. 선언문으로 작성
class Member {
    getName(){
        return '이름 ';
    }
}

let obj1 = new Member();
console.log('1 :: ' ,obj1.getName());



//2. 표현식으로 작성
//  ==> 할당연산자(=) 왼쪽에 클래스 이름을 작성하고, 오른쪽에 class 키워드를 작성.
let name1 = class {};
let name2 = class inner_name{}; // inner_name 은 클래스 안에서 자신을 호출할때 사용.(거의 쓰지 않음.)
//let name3 = class extends super_name {};
//let name4 = class inner_name extends super_name {};


let Member1 = class {
    getName(){
        return '이름 1';
    }
}
let obj2 = new Member1();
console.log('2 :: ', obj2.getName());



class Member2 {
    
    setName(name){
        this.name = name;
    }
    // 사이에 콤마(,) 를 작성하지 않는다.
    getName () {
        return this.name;
    }
}


Member2.prototype.getTitle = function(){};
console.log('3 :: ', typeof Member2);
console.log('4 :: ', );



//------------------------------------------------
// prototype 에 프로퍼티 연결
//------------------------------------------------
// prototype.setName 과 같이 prototype에 메서드를 연결하여 작성하지 않고,setName을 작성한다.
// ==> 자바스크립트는 기본적으로 prototype에 메서드를 연결하는 구조이므로, 클래스안에 작성된 메서드를
// ==> 엔진이 자동으로 prototype에 연결한다. (즉, Member.prtotype.setName 형태로 자동으로 연결됨.)
// 인스턴스 생성 후 클래스 밖에서 클래스에 메서드를 추가하려면, 아래와 같이 작성함.
// ==> Member2.prototype.getTitle = function(){}; 
// ==> 다만, 이미 생성된 인스턴스에 추가한 메서드를 공유할 수 있도록, 엔진이 처리하게 되므로 부하걸림.


