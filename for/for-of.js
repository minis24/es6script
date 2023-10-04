//for-of 문은 이터러블 오브젝트를 반복하여 처리.

/* [구문]
    for(variable of iterableOjbect){
        코드
    }
*/

for(var value of [10,20,30]){
    console.log(value)
}

//value 변수값을 변경하지 않도록 const 로 선언
for(const value of [10,20,30]){
    console.log(value)
}


//문자열 반복
for(let str of "abc"){
    console.log(str)
}



//NodeList 반복
let nodes =document.querySelectorAll("li");
console.log(nodes);
for(let node of nodes){
    console.log(node.textContent);
}


//디스트럭쳐링
let values = [
    {item:'선물1', amount:{apple:10,candy:20}} ,
    {item:'선물2', amount:{apple:30,candy:40}} ,
];

for (let {item:one,amount:{apple:two,candy:five}} of values ){
    console.log(one,two,five);
}


//for-of 와 for-in 의 차이
//(1) for-in문의 대상은 Object 오브젝트리먀, 열거가능한 프로퍼티가 대상 
//  for-in 문으로 values1 배열을 열거하면,
//  Array.prototype에 추가한 music과 Object.prototype에 추가한 sports가 출력된다.
//  Array.prototype에 빌트인으로 설정된 메서드는 열거되지 않지만, 개발자가 코드로 추가한 메서드는 열거됨.
//  따라서 실행결과에 music 함수와, sports함수가 열거된다. 

//(2) for-of 문의 대상은 이터러블 오브젝트 이며, prototype에 연결된 프로퍼티는 대상이 아님.



//values1 은 Array 오브젝트로 Array.prototype에 연결된 프로퍼티가 values1.__proto__에 첨부된다.
let values1 = [10,20,30];

//아래 예제를 위해 빌트인 오브젝트인 Array의 프로토타입에 메서드를 추가해줬음.
/*
콘솔에서 > values1.__proto__ 를 출럭하면
> values1.__proto__
    [music: ƒ, constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, …]
    music: ƒ ()
    at: ƒ at()
    concat: ƒ concat()
    constructor: ƒ Array()
    ...
*/

Array.prototype.music = function(){    // Array.prototype 에 연결된 프로퍼티가 vlaues1.__proto__에 연결됨.
    return '음악';
}

/*
콘솔에서 Array.prototype 를 찍으면..
    > Array.prototype
    [music: ƒ, constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, …]
    music: ƒ ()
    at: ƒ at()
    concat: ƒ concat()
    constructor: ƒ Array()
    ...
*/

//띠라서 values1.music() 으로 호출 할 수 있다.
console.log(values1.music())
/* 
[출력결과] '음악'
*/



// Object.prototype에 sports메서드를 추가하면, values1.__proto__.__proto__와 Object.prototype 이 연동되므로
// values1.sprots() 로 호출 할 수 있다.

Object.prototype.sports = function(){  
    return '스포츠';
}
/*
    콘솔에서 values1.__proto__.__proto__를 찍으면,
    > values1.__proto__.__proto__
    {sports: ƒ, constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, …}
        > sports: ƒ ()
        ...

    콘솔에서 Object.prototype 을 찍으면,
    > Object.protortpe
    {sports: ƒ, constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, …}
        > sports: ƒ ()
        ...
*/
//띠라서 values1.sports() 로 호출 할 수 있다.
console.log(values1.sports())
/* 
[출력결과] '스포츠'
*/



for (let key in values1){
    console.log('for-in ::: key,value[key]',key,values1[key]);
}
//for-in 문으로 values1 배열을 열거하면,
// Array.prototype에 추가한 music과 Object.prototype에 추가한 sports가 출력된다.
// Array.prototype에 빌트인으로 설정된 메서드는 열거되지 않지만, 개발자가 코드로 추가한 메서드는 열거됨.
// 따라서 실행결과에 music 함수와, sports함수가 열거된다. 

/*
[출력결과]
for-in ::: key,value[key] 0 10
for-in ::: key,value[key] 1 20
for-in ::: key,value[key] 2 30
for-in ::: key,value[key] music ƒ (){
    return '음악';
}
for-of.js:56 for-in ::: key,value[key] sports ƒ (){
    return '스포츠';
}
*/

console.log('<<<for-of>>>');
for (let value of values1){
    console.log(value);
}
// for-of 문으로 values1 배열을 열거하면, prototype에 연결된 프로퍼티가 열거되지 않음.

/*
[출력결과]
<<<for-of>>>
10
20
30

*/

