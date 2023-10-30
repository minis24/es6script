
//-----------------------------------------------------
// (1) "ES5"에서의 상속을 구현방법
// 상속 : 클래스를 상속 받으면, 상속받은 클래스의 메서드와 프로퍼티를 사용할 수 있다.
//-----------------------------------------------------



// new 연산자로 인스턴스를 만들겠다는 의도로, 대문자로 시작했음.
// new MemberES5()를 실행하면, MemberES5()가 호출되고, 다시 디폴트 constructor를 호출한다.
// 그래서 MemberES5()를 생성자(constructor) 함수라고 부른다.
function MemberES5(member){ 

    //this.member 에서 this가 생성하는 인스턴스를 참조하므로,
    //member 는 인스턴스 프로퍼티가 된다.
    //인스턴스 프로퍼티는 생성된 모든인스턴스에 공유되지 않으며, 각 인스턴스마다 고유한 값을 각각 유지한다.
    this.member = member;
};
// ==> 여기까지 작성한 후 브라우저콘솔에서 인스턴스를 생성해서 출력해보면 프로퍼티만 생성되어 있고, protortype에 연결된 메서드(개발자가 작성한..)는 없다. 
/* [출력] new MemberES5('aa');
    >  MemberES5 {member: 'aa'}
    >   member : "aa"
    >   ...
*/
// 



// 생성자 함수가 있으면,
// MemberES5.prototype.setItem과 같이 prototype에 메서드를 연결한 코드가 있다.
// prototype에 연결한 코드가 없으면, 생성자 함수가 아니라, 일반 함수이다.
MemberES5.prototype.setItem = function(item){
    this.item = item;
}
// ==> 여기까지 작성한 후 브라우저 콘솔에서 인스턴스를 생성해서 출력해 보면 prototype 에 setItem함수가 연결되어 있다.
/* [출력] new MemberES5('aa');
    >  MemberES5 {member: 'aa'}
        >   member : "aa"
        >   [[Prototype]] : Object
            > setItem : ƒ (item)
            > ...
*/





// * Kim을 대문자로 작성하여, new 연산자를 사용한다는 의도.
// * Kim()이 실행되면, 함수 내부의 MemberES5.call() 함수가 호출이되고, 따라서 MemberES5()가 호출된다.
// * new MemberES5()가 아닌,  MemberES5.call(this,member); 형태로 호출한것은
//    ==> 바로 다음 코드에서 MemberES5.prototype을 사용하여 인스턴스를 생성하므로, 인스턴스에 초기값만 설정하면 되기때문.
function Kim (familyName){

    //call()함수는 Function 객체에 미리정의되어 있는 함수. (apply(),bind()도 마찬가지.)
    //첫 번째 인자는 함수를 소유하는 객체를 지정하고, 
    // 두 번째 부터는 옵션으로 필요하다면 함수로 보내는 인자를 지정할 수있습니다.
    // ==> MemberES5()함수를 호출하는데, 
    console.log('this :: ',this)  /* [출력] this ::  Kim {} */
    MemberES5.call(this,familyName);  
}



//Object.create() 메소드는 지정된 프로토타입(prototype) 객체와 프로퍼티를 가지고 새로운 객체를 만들어 줍니다.
// 첫 번째 인수 : 프로토타입으로 사용할 객체를 전달합니다.
// 두 번째 인수 : 새로운 객체의 추가할 프로퍼티 정보를 전달합니다.
//   ==> 두번째 파라미터인 setName 객체를 첫번째 파라미터인 MemberES5.prototype에 첨부합니다.
//   ==> MemberES5.prototype에 연결된 메서드를 Kim.prototype에 첨부한다.
Kim.prototype = Object.create(MemberES5.prototype,{
    setName : {
        value : function(name){
            this.name = name;
        }
    }
});

//위의 코드에서 Kim.prototype에 MemberES5.prototype을 연결하면서 Kim의 constructor가 지워지므로,
//constructor를 Kim을 연결해준다.
Kim.prototype.constructor = Kim;
/* [출력 : 위코드 실행시 ] [[Prototype]] : MemberES5            ==> 이떄 this ::  Kim {}
            > constructor : ƒ Kim(familyName) */  
/* [출력 : 위코드 주석처리시 ] [[Prototype]] : MemberES5         ==> 이때 this ::  MemberES5 {}
            > [[Prototype]] : Object
                > constructor : ƒ MemberES5(member)
*/


// 1. new 연산자롤 Kim() 생성자 함수 호출하여 인스턴스 생성
// 2. MemberES5.prototype에 연결된 메서드는 인스턴스에 포함 되지만, MemberES5()생성자 함수는 포함하지 않으므로
// 3. MemberES5.call(this,familyName) 코드를 수행하여 인스턴스 초기값을 설정
// 4. this는 생성한 인스턴스를 참조.
var objES5 = new Kim('JKKIM');

objES5.setItem('QRY');  //상속받은 MemberES5.prototype에 연결된 메서드, 상속받으면 인스턴스에서 직접 상속받은 메서를 호출 할 수 있다.
objES5.setName('jangkwan');


console.log('1 :: ' ,objES5.member);
console.log('2 :: ' ,objES5.item);
console.log('3 : ' ,objES5.name);

//let member1 = new Member1();
// ==> member1.getName 이 값을 구하는 형태이지만, getName이 getter이므로 메서드로 호출됨.
//console.log('1 :: ',member1.getName);


/*[출력]
1 ::  kim jk
*/


//-----------------------------------------------------
// (2) "ES6"에서의 상속을 구현방법
//-----------------------------------------------------


class MemberES6{
    //메서드 이름에 get을 작성하면, getter로 설정됨.
    get getName(){
        return 'kim jk';
    }
}