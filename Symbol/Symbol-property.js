
//-----------------------------------------------------
// 1. toStringTag
//-----------------------------------------------------
//  => toString()은 인스턴스/오브젝트를 문자열로 벼환하여 [object Object]로 리턴하는데
//  => Function 오브젝트도 [object Object] 로 리턴하므로 명확히 구분할 수 없다.
//  => 이때, Symbol.toStringTag를 사용하여 [object Object]에서 Object 에 표시할 문자열을 지정할 수 있다.



let Sports = function(){};

let s = new Sports;  // 파라미터가 없을때 ()생략 가능
console.log (s);

let sportsObj = new Sports();
console.log(sportsObj.toString());
/*출력 : [object Object] */


//(1) 인스턴스의 Symbol.toStrignTag 프로퍼티로 설정
Sports.prototype[Symbol.toStringTag] = 'Sports-Object';
console.log(sportsObj.toString());
/*출력 : [object Sports-Object] */




//-----------------------------------------------------
//(2) 클래스의 메서드로 사용
//-----------------------------------------------------
console.log();
console.log('==================================');
class Book {};
let bookObj = new Book();
//인스턴스로 toString()을 실행하면, 
//[object Object]로 반환되기 때문에 Function 오브젝트, Object 오브젝트와 구분 안됨.
console.log(bookObj.toString());
/* 출력 : [object Object] */



// 클래스에 Symbol.toStringTag 를 getter 로 설정
class Sports1 {
    get [Symbol.toStringTag]() {
        return 'Sports-Class';
    };

    getValue(){
        return '111'; 
    };
};




let sportObj1 = new Sports1();
console.log(sportObj1.toString());
/* 출력 : [object Sports-Class] */

console.log('sportObj1.getValue() ::' ,sportObj1.getValue());
/* 출력: sportObj1.getValue() :: 111 */

console.log(Map.prototype[Symbol.toStringTag]);
/* 출력 : Map */

console.log('Symbol.toStringTag :: ' ,[Symbol.toStringTag])
/* 출력 : Symbol.toStringTag :: [Symbol(Symbol.toStringTag)] */



//-----------------------------------------------------
// 2. Object 오브젝트의 toStringTag 
//-----------------------------------------------------
obj = {
    value : 123 ,
    get getValue (){
        return this.value;
    }
}

console.log('getValue :: ',obj.getValue);
/* 출력 : getValue ::  123 */

console.log('obj :: ',obj);
/* 출력 : obj ::  { value: 123, getValue: [Getter] } */

console.log('obj.toString() :: ', obj.toString());
/* 출력 : obj.toString() ::  [object Object] */

//-----------------------------------------------------
//(1) toStringTag 프로퍼티로 설정하는 방법
//-----------------------------------------------------
obj[Symbol.toStringTag] = 'OOOOObject';
console.log('obj.toString() :: ', obj.toString());
/* 출력 : obj.toString() ::  [object OOOOObject] */


//-----------------------------------------------------
//(2) Object 오브젝트의 getter 로 설정하는 방법
//-----------------------------------------------------
obj2 = {
    value : 123 ,
    get getValue (){
        return this.value;
    },
    get [Symbol.toStringTag](){
        return 'Obj2-Object';
    }
}

console.log('obj2.toString() :: ', obj2.toString());
/* 출력 : obj2.toString() ::  [object Obj2-Object] */