"use Strict"
debugger


let sports1 = function(){
    this.count = 20;
};


sports1.prototype = {
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

    get1: function(){
        setTimeout(function (){
            console.log(this === window );
            //console.log(this.plus);
        }  // ==> 오류나거나 undefined
        ,1000);
    }
};


let s = new sports1();

s.get();
console.log('plus')
s.get1();
