/* 
Map 오브젝트
    # new Map()
    # set()
*/




/*
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
let newMap4 = new Map([['one',1]]);  // 
console.log(newMap3)
console.log(newMap4)
/*[출력]
error :: [one,1]
error :: {one,1}
Map(1) { undefined => undefined }
Map(1) { 'one' => 1 }
*/







console.log('')
console.log('')
console.log('-----------------------------------------------')




//-------------------------------------------------
// (2) set() : key, value 설정
//-------------------------------------------------
// 첫번째 파라미터 : key가 될 String 또는 오브젝트를 작성
// 두번째 파라미터 : value 를 작성
//  ==> set()을 실행 후 Map 인스턴스를 반환하므로, 메서드 체인 형태로 계속해서 Map 인스턴스의 메서드를 호출할 수 있다.
//  ==> key값이 같은 key가 존재하면, 추가하지 않고, value를 바꾼다.


const newMap5 = new Map();
newMap5.set('one',100);
console.log('newMap5.size :: ',newMap5.size);

/*[출력] newMap5.size ::  1 */


newMap5.set({},'오브젝트');
newMap5.set(function(){},'Function');
newMap5.set(new Number('123'),'인스턴스');
newMap5.set(NaN,'Not a Number');

for (let [key,value] of newMap5){
    console.log(key ,value)
}
/*[출력]
one 100
{} 오브젝트
[Function (anonymous)] Function
[Number: 123] 인스턴스
NaN Not a Number

*/

console.log('newMap5.size :: ',newMap5.size);
/*[출력] newMap5.size ::  5 */






const newMap6 = new Map();
newMap6.set('one',100);
newMap6.set('one',123);

let obj1 = {sports:'스포츠'};   
newMap6.set(obj1,"오비제이1 오브젝트");  // obj1 인스턴스의 주소값이 key로 설정됨.
newMap6.set(obj1,'오비제이1 오브젝트 변경'); // 동일한 인스턴스의 주소값이 key이므로 값이 대체됨.

newMap6.set({},"Object-1 ");  //{} 새로운 오브젝트의 인스턴스 주소값이 key가 됨
newMap6.set({},'Object-2 ') //위와 마찬가지로 {} 새로운 오브젝트의 인스턴스 주소값이 key가 되므로 값이 대체 되지 않음.주소값이 다르므로 다른 key로 인식함.

/*
Map(4) {'one' => 123, {…} => '오비제이1 오브젝트 변경', {…} => 'Object-1 ', {…} => 'Object-2 '}
0: {"one" => 123}
1: {Object => "오비제이1 오브젝트 변경"}  
2: {Object => "Object-1 "}
3: {Object => "Object-2 "}
*/









console.log('')
console.log('')
console.log('-----------------------------------------------')


//-------------------------------------------------
// (3) get() : key가 같은 value값 반환
//-------------------------------------------------
// Map 인스턴스 에서 key값이 같은 value를 반환함.


const newMap7 = new Map();
newMap7.set('one',100);
console.log(newMap7.get('one'))
console.log(newMap7.get('two'))
/*[출력]
100
undefined
*/


let obj2 = {obj2 : '오비제이2'};
newMap7.set(obj2,'오비제이2 인스턴스');
console.log(newMap7.get(obj2));

/*[출력] 오비제이2 인스턴스 */



const newMap8 = new Map();
newMap8.set({},"오오오브제액트");
console.log(newMap8.get({}));

/*[출력] undefined */



newMap8.set(123,'값 123');
console.log(newMap8.get(123));
console.log(newMap8.get('123'));
/*[출력]
값 123
undefined
*/

newMap8.set(NaN,"Not a Number");
console.log(newMap8.get(NaN));
/*[출력] Not a Number */

//----> 