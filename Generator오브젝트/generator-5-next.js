/*
-----------------------------------------------
next([param]): yield 단위로 실행.
-----------------------------------------------
    ==> yield를 기준으로 이전 yield의 다음줄 부터 yield 까지 수행함.
    ==> 파라미터는 옵션으로 제너레이터 함수가 멈춘 yield의 왼쪽 변수에 설정함.
*/

let genFunc = function* (param){
    param = param + 10;
    yield ++ param ;

    param = param + 20;
    yield ++ param ;
};

//param 에 100을 설정하여, 제너레이터 오브젝트 생성
let genObj = genFunc(100);


//next() 실행 
console.log(genObj.next()); 
/*출력 : { value: 111, done: false } */

console.log(genObj.next()); 
/*출력 : { value: 132, done: false }*/

console.log(genObj.next());
/*출력 : { value: undefined, done: true } */



console.log('===================================')


//----------------------------------------------
// 제너레이터 함수에 yield 없이 return 문으로 작성한 형태
//----------------------------------------------
let genFunc2 = function*(param){
    return ++ param;
}

let genObj2 = genFunc2(100);
console.log(genObj2.next());

// ==> param 에 100이 설정되어 있으며, ++ 연산하여 value : 101 로 설정하고,
// ==> done 프로퍼티에 true 로 설정하여 리턴함.
/* 출력 : { value: 101, done: true } */




//----------------------------------------------
// yield 앞에 let 변수와, var 변수를 작성한 형태
//----------------------------------------------
let genFunc3 = function*(param){
    let p1 = param + 1;
    yield p1 ;

    var p2 = 2;
    yield p1 + p2 ;
};

let genObj3 = genFunc3(10);

console.log(genObj3.next());
// 처음 next()를 호출하면, 현재 param 값이 10 이므로, 1을 더해서 p1 변수에 할당
// yield p1 에서 {value : 11, done : false} 리턴
/*출력 { value: 11, done: false }*/

console.log(genObj3.next());
// 두번쨰 next() 호출하면, {value : 13, done : false} 리턴
// 이 때, p1은 let 변수로 이전 yield의 함수블록에서 선언하였으며, 
// yield 로 인해 제너레이터 함수에서 빠져나왔습니다.
// 일반 function 키워드 함수는 다시 함수 안으로 들어가면, 변수에 초기값을 설정하지만,
// 제너레이터 함수는 변수에 설정된 값을 유지한다.
/*출력 { value: 13, done: false }*/


console.log(genObj3.next());
/*출력 { value: undefined, done: true }*/



console.log('=========================');


//----------------------------------------------
// yield 오른쪽에 표현식을 작성하지 않았을때,
// 수행할 yield 가 없을 때의 처리
//----------------------------------------------
let p1,p2;
let genFunc4 = function* (){
    p1 = yield;
    p2 = yield p1 + 10;
};

let genObj4 = genFunc4();
console.log(genObj4.next());
// ==> yield 오른쪽 표현식을 작성하지 않으면, value 프로퍼티에 undefined를 설정함.
/* 출력 : { value: undefined, done: false } */


console.log(genObj4.next(11));
// ==> 두번쨰 next(11)로 호출하면, 바로 앞 yield의 왼쪽 p1 변수에 11를 설정함.  
/* 출력 { value: 21, done: false } */


console.log(genObj4.next(21));
// ==> 마지막 next(21)을 호출하면, 바로 앞 yield의 p2 변수에 21 을 설정함.
// ==> 그런데 수행할 yield 가 없으므로, value 프로퍼티는 undefined가 설정된다.
/* 출력 : { value: undefined, done: true } */