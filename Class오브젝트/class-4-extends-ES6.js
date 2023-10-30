/* 상속 : 클래스를 상속 받으면, 상속받은 클래스의 메서드와 프로퍼티를 사용할 수 있다.
*/




//-----------------------------------------------------
// (2) "ES6"에서의 상속을 구현방법
//-----------------------------------------------------
// [구문] class subClass extends superClass { }

// ==> extends 키워드는 서브클래스의 prototype에 __proto__를 만들고,
// ==> 슈퍼클래스의 prototype에 연결된 프로퍼티를 연결한다.
// ==> 슈퍼클래스의 prprotype에 연결된 메서드를 복사는게 아니라, 공유한다.

// ==> ES5의 Obejct.create() 로 만든 구조와 동일함, extends로 구현하는게 직관적이고 가독성이 좋다.


class Sports{
    constructor(member) {
        this.member = member;
    }

    getMember(){
        return this.member;
    }
}


class Soccer extends Sports {
    setGround(ground){
        this.ground = ground;
    }

}


//new Soccer()로 인스턴스를 생성하면,
// super클래스의 constructor 가 호출되며,  this 는 생성되는 인스턴스를 참조하므로
// 파라미터로 받은 값을 인스턴스의 member프로퍼티에 설정할 수 있다.
// 1) Soccer 클래스의 constructor 호출
// 2) 그런데 Soccer클래스에서 constructor를 작성하지 않음.
// 3) 이어서 슈퍼클래스의 constructor가 호출되면서, 11을 파라미터로 넘겨줌.
// 4) 슈퍼클래스의 constructor에서 this는 현재의 인스턴스를 참조하므로, 인스턴스의 member프로퍼티에 11을 설정함.
let obj = new Soccer(11);


console.log(obj.getMember());
//1) obj.getMember()를 호출하면, 우선 obj.__proto__에서 메서드를 찾는다.
//2) 여기에 존재하지 않으므로,obj.__proto__.__proto__에서 찾는다.,
//3) 메서드가 존재하므로 호출한다.
//4) ## __.proto__를 계층으로 메서드를 찾으므로, 서브클래스와 슈퍼클래스에 같은 이름의 메서드가 있으면
//5) ## 서브클래스의 메서드가 호출된다. 
//6) 이떄 super 키워드로 슈퍼클래스의 메서드를 호출 할 수 있다.

