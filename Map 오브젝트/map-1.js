/* 
Map 오브젝트
Map 오브젝트는 Key와 Value로 구성된다.
Key,value 만 보면 Object 오브젝트와 같지만, Map 오브젝트는 key로 사용할 수 있는 타입이 다양하다.
    ==> Object 오브젝트 : key 타입이 String 또는 Symbol
    ==> Map 오브젝트 : String ,Symbol 외에도 Object,Function 등의 오브젝트를 사용할 수 있다.
*/

// Object 오브젝트 ==> {key:value} 형태로 작성, key 값이 같아도 추가됨
// Map 오브젝트 ==> ["key","value"] 와 같이 이터러블 형태로 작성 , 

//-------------------------------------------------
// Object 오브젝트와 차이점
//-------------------------------------------------
// ==> 키 타입이 다양하다는 점
// ==> 이터러블로 작성
// [!!!중요!!!] ==> key 값이 같으면, 추가되지 않고, value 값이 대체됨
// [!!!중요!!!] ==> 작성한 순서 보장 ! ,추가한 순서대로 읽혀짐. (key,value) 외에 별도로 일련번호를 부여하기 때문에 가능



//-------------------------------------------------
// (cf) Object 오브젝트도 키값 이 같은 영우 버전별로 다르게 처리됨
//-------------------------------------------------
//(var obj = {key:value}) 형태에서 key값이 같은 프로퍼티를 두 개 작성 했을 때,
// 자바스크립트 에디션 별로 처리하는데 차이가 있음.
// ES3 ==> key 값이 같더라도 추가되고,
// ES5의 strict 모드 ==> 에러가 발생함.
// ES6 ==> strict 모드에 관계 없이 에러가 발생하지 않으며, 나중에 작성된 프로퍼티 값으로 대체 된다.
// 나중에 작성된 프로퍼티는 추가되지 않으며, 값만 대체되는 것임.





//-------------------------------------------------
// (1) new Map() : Map 인스턴스 생성
//-------------------------------------------------
// 파라미터는 선택으로, 이터러블 오브젝트를 작성하고, 그안에 배열로[key,value]를 작성

let emptyMap = new Map();
let newMap1 = new Map([
    ['key1','value1'],   //==> key1이 같으므로, 나중에 값으로 대체됨.
    ['key2','value2'],
    ['key1','diffValue'],
]);

console.log(emptyMap)
console.log(newMap1)


//newMap1 인스턴스가 이터러블 오브젝트 이므로 for-of 문으로 열거 가능.
for(var item of newMap1){
    console.log(item);
}

/* [출력] ➜ node map-1.js
Map(0) {}
Map(2) { 'key1' => 'diffValue', 'key2' => 'value2' }
[ 'key1', 'diffValue' ]
[ 'key2', 'value2' ]
*/





console.log('')
console.log('')
console.log('-----------------------------------------------')




let newMap2 = new Map([
    ['key1','value1'],   //==> key1이 같으므로, 나중에 값으로 대체됨.
    ['key2','value2'],
]);

for(var item of newMap2){
    console.log('*****************')
    console.log(item);
    console.log('*****************')
    item.forEach((e,index)=>{
        console.log('index :: ',index ,', e :: ',e )
    });
    console.log();
}

/*[출력]
*****************
[ 'key1', 'value1' ]
*****************
index ::  0 , e ::  key1
index ::  1 , e ::  value1

*****************
[ 'key2', 'value2' ]
*****************
index ::  0 , e ::  key2
index ::  1 , e ::  value2

*/


//key,value가 한번에 설정되므로, 위코드 처럼 forEach 안돌려도 됨.
for (var [key,value] of newMap2){
    console.log(key,value)
}
/*[출력]
key1 value1
key2 value2
*/



console.log('')
console.log('')
console.log('-----------------------------------------------')




try{
    //console.log( new Map([["one",1]])) ; 
    new Map(["one",1]) ; // [["one",1]] 처럼 작성해야함.
}catch(error){
    //console.log(error);
    console.log("error :: [one,1]");
}

try{
    new Map({one:1})
}catch(error){
   // console.log(error);
    console.log("error :: {one,1}");
}

let newMap3 = new Map([{one:1}]);  // 오류는 발생하지 않지만, key,value 에 undefined 설정됨.
let newMap4 = new Map([['one',1]]);  // 오류는 발생하지 않지만, key,value 에 undefined 설정됨.
console.log(newMap3)
console.log(newMap4)
/*[출력]
error :: [one,1]
error :: {one,1}
Map(1) { undefined => undefined }
Map(1) { 'one' => 1 }
*/









//----> 