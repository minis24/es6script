
const sym = Symbol();
console.log('1 :: ', sym );
console.log('2 :: ', typeof sym);
console.log('3 :: ', Symbol('주석'));
console.log('4 :: ', sym == Symbol());



try {
    +sym;

}catch(error){
    console.log('+sym 불가');
}


try{
    sym | 0;
}catch(error){
    console.log('sym | 0 불가')
}

try{
    sym + '문자열';
}catch(error){
    console.log('문자열 연결 불가');
}

console.log(String(sym)+'연결');
console.log(sym.toString() + '연결');



let sym2 = Symbol('123');
try {
    `${sym2}`
}catch(error){
    console.log('${sym2} 불가')
}


let sym3 = Symbol('123');
const obj = Object(sym3);
console.log(obj);

console.log(obj == sym3);
console.log(obj === sym3);
console.log('sym3.valueOf() :: ',sym3.valueOf());
/* 출력 : sym3.valueOf() ::  Symbol(123) */

let sym4 = Symbol('123');
let obj1 = {[sym4]:'456'};
console.log('obj1 ::',obj1);
/* 출력 : obj1 :: { [Symbol(123)]: '456' } */

console.log(obj1[sym4])
console.log(obj1.sym4)


let obj2 = {nine:9};
obj2[Symbol('one')] = '111';
obj2[Symbol('two')] = '222';

console.log('obj2 :: ',obj2);
/* 출력 : obj2 ::  { nine: 9, [Symbol(one)]: '111', [Symbol(two)]: '222' } */



//for-in 문으로 obj2 오브젝트를 열거하면
// Symbol-keyed 프로퍼티가 열거되지 않음.
// 그래서 nine 만 출력됨.
// --> Object.getOwnPropertySymbols() 를 사용하면 Symbol-keyed 프로퍼티를 열거 할 수 있음.
for (let key in obj2){ 
    console.log(key)
}
/* 출력 : nine */

for (let key in Object.getOwnPropertySymbols(obj2)){ 
    console.log('key:: ',key ,' ,value :: ',obj2[key]);
}
/* 출력 
key::  0  ,value ::  undefined
key::  1  ,value ::  undefined
*/



//for-of 로 Object 오브젝트 열거하기.
// 원래 Object 오브젝트는 이터러블오브젝트가 아니므로 for-of 문으로 열거 할 수 없으나,
// 아래와 같이 사전처리 후 열거 가능.
console.log('----------------------------------')
for (let key of Object.keys(obj2)){ 
    console.log('key:: ',key ,' ,value :: ',obj2[key]);
}
/* 출력 : key::  nine  ,value ::  9 */