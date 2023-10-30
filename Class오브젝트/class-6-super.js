/* 상속 : 클래스를 상속 받으면, 상속받은 클래스의 메서드와 프로퍼티를 사용할 수 있다.
*/


//-----------------------------------------------
// super 키워드 
//-----------------------------------------------
//1) ## __.proto__를 계층으로 메서드를 찾으므로, 서브클래스와 슈퍼클래스에 같은 이름의 메서드가 있으면
//2) ## 서브클래스의 메서드가 호출된다. 
//3) 이떄 super 키워드로 슈퍼클래스의 메서드를 호출 할 수 있다.

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

let obj = new Soccer(11);


console.log(obj.getMember());

//-----------------------------------------------
// 메소드 오버라이딩
//-----------------------------------------------
// 서브클래스와 슈퍼클래스에 같은 이름의 메서드가 있을때 서브클래스의 메서드가 호출되는것을 메서드 오버라이딩 이라고 한다.


class Sports1{
    setGround(ground){
        this.ground = ground;
    }
}

class Soccer1 extends Sports1 {
    setGround(ground){
        super.setGround();
        this.ground = ground;
    }

}

let obj1 = new Soccer1();
obj1.setGround('상암구장');

console.log(obj1.ground);



/* [출력] 
상암구장
*/




//new Soccer2(123)를 호출하면,
// Soccer2 클래스의 constructor 가 호출된다.
// 첫줄의 super(member)를 호출하면 슈퍼클래스의 constructor가 호출되며, 파라미터로 받은 값을 넘겨준다.
// 슈퍼클래스의 constructor를 호출하려면, 서브클래스 첫째줄에 super()를 작성해야 한다.


// (1) 서브클래스에 constructor를 작성하고, 슈퍼클래스에 constructor를 작성하지 않은 경우 에러 발생
//   ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

// (2) 서브클래스와 슈퍼클래스 양쪽에 constructor를 작성하면, 에러발생
//   ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

//  ==> 서브클래스에 constructor를 작성하지 않거나, 
//  ==> 서브클래스의 constructor에 super()를 작성하면, 슈퍼클래스의 constructor를 호출해야한다.

class Sports2{
    constructor(member) {
        this.member = member;
        console.log('1 :: this.member :: ',this.member);
    }

    setGround(ground){
        this.ground = ground;
    }
}

class Soccer2 extends Sports2 {
    constructor(member) {
        super(member);
        this.member = 456;
        console.log('2 :: this.member :: ',this.member);
    }

}

let obj2 = new Soccer2(123);

/* [출력]
1 :: this.member ::  123
2 :: this.member ::  456
*/