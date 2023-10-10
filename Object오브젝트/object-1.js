


//(var obj = {key:value}) 형태에서 key값이 같은 프로퍼티를 두 개 작성 했을 때,
// 자바스크립트 에디션 별로 처리하는데 차이가 있음.
// ES3에서는 key 값이 같더라도 추가되고,
// ES5의 strict 모드에서는 에러가 발생함.
// ES6에서는 strict 모드에 관계 없이 에러가 발생하지 않으며, 나중에 작성된 프로퍼티 값으로 대체 된다.
// 나중에 작성된 프로퍼티는 추가되지 않으며, 값만 대체되는 것임.
let samekey = {one:1 , one:2};
console.log('samekey :: ' ,samekey);


/* 출력결과
samekey ::  { one: 2 }
*/





//변수 이름으로 값 설정
//(let values = {one,two}) 에서 one 이 프로퍼티 이름이 되면서
// 앞에서 작성한 one 변수 값인 1이 프로퍼티 값으로 설정됨.
// {one,two} 형태가 {one:1 , two:2} 형태로 변환됨.
let one = 1, two = 2 ;
let values = {one,two};
console.log('values :: ',values);

/* 출력결과
values ::  { one: 1, two: 2 }
*/


//Object 에 function 작성
//ES5에서 Object 오브젝트에 함수를 다음 형태로 작성한다.

let obj = {
    getTotal : function(param){
        return param + 123;
    }
}

console.log(obj.getTotal(1));

/* 출력결과
124
*/



//ES6에서 다른 방법으로 작성 가능
// --> 콜론 (":") 과 "function" 키워드를 사용안함.
let obj2 = {
    getTotal(param){
        return param + 123;
    }
}

console.log(obj2.getTotal(1));
/* 출력결과
124
*/



