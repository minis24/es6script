/* getter, setter  
    메서드 이름 앞에 get,set 을 붙이면, 클래스에 getter,setter 를 설정 할 수 있다.
*/


class Member1{
    //메서드 이름에 get을 작성하면, getter로 설정됨.
    get getName(){
        return 'kim jk';
    }
}

let member1 = new Member1();
// ==> member1.getName 이 값을 구하는 형태이지만, getName이 getter이므로 메서드로 호출됨.
console.log('1 :: ',member1.getName);


/*[출력]
1 ::  kim jk
*/




class Member2 {

    set setName(name){
        this.name = name;
    }

    get getName(){
        return this.name;
    }
}

let member2 = new Member2();
// ==> member1.getName 이 값을 구하는 형태이지만, getName이 getter이므로 메서드로 호출됨.
member2.setName = '이름 1';
console.log('2 :: ',member2.getName);


/* [출력결과]
2 ::  이름 1
*/


