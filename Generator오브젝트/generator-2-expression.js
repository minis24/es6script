let generatorFunction = function* (param1,param2){
    console.log ('함수블럭 실행');
    yield param1 + param2;
    yield param1 * param2;
}

let generatorObj = generatorFunction(10,20);
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());

/*출력 : 
함수블럭 실행
{ value: 30, done: false }
{ value: 200, done: false }
{ value: undefined, done: true }
*/