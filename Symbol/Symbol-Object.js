
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
console.log(sym3.valueOf());


let sym4 = Symbol('123');
let obj1 = {[sym4]:'456'};
console.log('obj1 ::',obj1);
console.log(obj1[sym4])
console.log(obj1.sym4)


let obj2 = {nine:9};
obj2[Symbol('one')] = '111';
obj2[Symbol('two')] = '222';

console.log(obj2);


for (let key in obj2){ 
    console.log(key)
}