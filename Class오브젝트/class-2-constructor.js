/* constructor  
    클래스 인스턴스를 생성하고 생성한 인스턴스를 초기화 하는 역할 수행.
    new Member() 를 호출하면, Member.prototype.constructor 가 호출됨.
    ## ES5에서 new Member()를 호출하면, 엔진이 디폴트 constructor를 호출하므로, 활용할 수 없었는데.
    ## ES6에서는 개발자가 constructor 를 정의할 수 있어서 클래스 뿐만 아니라 Proxy 오브젝트, Reflect오브젝트에서 활용가능.
*/


class Member1{
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}


// ==> new 연산자가 인스턴스를 생성하는것 처럼 보이지만,
// ==> new 연사자는 constructor를 호출하면서 파라미터를 넘겨주는 역할을 함.
// ==> constructor가 인스턴스를 생성하여 반환하면, new 연산자가 받아서 new 를 실행한 곳으로 반환.
let member1 = new Member1('kim');
console.log('1 :: ',member1.getName());





// ------------------------------------
// constructor 반환값 변경
// ------------------------------------
class Member2 {
    constructor(){
        // constructor에서 숫자 또는 문자열을 반환하면, 이를 무시하고, 생성한 인스턴스를 반환한다.
        return 1;
    }
    getName(){
        return '이름';
    }
}

let member2 = new Member2();
// ==> constructor가 1을 리턴하면, member2 에 1이 설정됨.
// ==> 인스턴스 1에 getName이 존재하지 않으므로, 에러가 발생해야하는데 
// ==> 무시하고 Member2 인스턴스를 리턴하므로 getName()이 호출됨.
console.log('2 :: ',member2.getName());


/* [출력결과]
2 ::  이름
*/



class Member3 {
    constructor(){
        //constructor에서 Object 오브젝트를 리턴하면, 이를 반환한다.
        return {name: 'kkk'};
    }
    getName(){
        return '이름';
    }
}

let member3 = new Member3();
// ==> member3에 {name: 'kkk'} 가 설정되어 있으므로, member3.name으로 'kkk' 출력
console.log('3 :: ',member3.name);
// ==> member3에 {name: 'kkk'} 가 설정되어 getName이 없으므로 오류 발생.
console.log('4 :: ',member3.getName());

/* [출력]
3 ::  kkk
TypeError: member3.getName is not a function
*/