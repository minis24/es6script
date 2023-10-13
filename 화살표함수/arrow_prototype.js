"use Strict"
debugger


// prototype에 화살표 함수를 연결하면 화살표 함수 블럭에서
// this가 인스턴스를 참조하지 못함. 
// !!!! prototype에서는 function 키워드로 함수를 생성해야함.



let sports = function(){
    this.count = 20;
};


sports.prototype = {
    plus : function (){
        console.log('plus');
        this.count += 1;
    },
    get : function(){

        //!!!! setTimeout에 콜백함수가 화살표함수로 작성되면
        // this 에 window 가 아니라 호출한 함수가 포함된 인스턴스가 설정된다.
        // 콜백함수가 function으로 작성되면 this 는 window 가 된다.
        setTimeout(()=>{
            this.plus();
            console.log(this.count);
        },1000);
        return true;
    },

    //!!!! setTimeout은 window 오브젝트의 함수
    get1: function(){
        setTimeout(function (){
            console.log(this === window );
            console.log(this.plus);}  // ==> 오류나거나 undefined
        ,1000);
    },

    //!!!! prototype 에 화살표 함수를 연결하면
    //this 가 window 오브젝트를 참조함.
    add: () => {this.count += 1}
};


let s = new sports();

s.get();
console.log('plus')
s.get1();

s.add();
console.log(s.count);
console.log(window.count);
