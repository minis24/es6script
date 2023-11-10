/*
Array 오브젝트
    # Array.from()
    # Array.of()
    # Array.copyWithin()
    # Array.fill()
    # Array.entries()
    # Array.keys()
    # Array.values()
    # Array.find()
    # Array.findIndex()

    # Array.push() 
    # Array.unshift()
    # Array.splice()

    # ==> 아래는 정리해야할 내용.
    # every(),with(),slice(),includes() 
*/


//--------------------------------------------
// push() : 배열의 끝에 요소를 추가
//--------------------------------------------

var arr = ['a', 'b', 'c'];


arr.push('d'); 
console.log('arr :: ' ,arr)
/* [출력] 
arr ::  (4) ['a', 'b', 'c', 'd']
*/




//--------------------------------------------
// unshift() : 배열의 앞쪽에 요소를 추가
//--------------------------------------------
arr1 = ['a', 'b', 'c']
arr1.unshift('d'); 
console.log('arr1 :: ' ,arr1)

/*[출력]
arr1 ::  (4) ['d', 'a', 'b', 'c']
*/


//--------------------------------------------
// splice() : splice 함수는 원하는 "위치"에 "삭제건수" 만큼 삭제하고
//  옵션으로 새로운 요소들을 추가할 수 있다.
//--------------------------------------------
// [구문] array.splice("위치", "삭제건수", ["요소1", "요소2" ... ])


var arr2 = ['a', 'b', 'c', 'e', 'f'];

// arr = ['a', 'b', 'e', 'f']
arr2.splice(2, 1); // index 2 부터 1개의 요소('c')를 제거
console.log('arr2 :: ',arr2)
/*[출력]
arr2 ::  (4) ['a', 'b', 'e', 'f']

*/

// arr = ['a', 'f']
arr2.splice(1, 2); // index 1 부터 2개의 요소('b', 'e')를 제거
console.log('arr2 :: ',arr2)
/*[출력]
arr2 ::  (2) ['a', 'f']
*/


var arr3 = ['a', 'b', 'c', 'e', 'f'];
removed = arr3.splice(0, 3); // 제거한 요소를 반환 받을 수 있음
console.log('removed :: ',removed)

/*[출력]
removed ::  (3) ['a', 'b', 'c']
*/



var arr4 = ['a', 'b', 'c'];
arr4.splice(2, 0, 'd'); // index 2 ('c')의 위치에 요소를 추가
console.log('arr4 :: ' ,arr4)

/*[출력]
arr4 ::  (4) ['a', 'b', 'd', 'c']
*/

arr4.splice(4, 0, ['e', 'f']); // index 4의 위치에 2개의 요소를 추가
console.log('arr4 :: ' ,arr4)
/*[출력]
arr4 ::  (5) ['a', 'b', 'd', 'c', Array(2)]
*/








//--------------------------------------------
// pop() : 배열의 마지막 요소를 제거
//--------------------------------------------
let arr5 = ['a', 'b', 'c', 'e', 'f'];
arr5.pop(); 
console.log('arr5 :: ',arr5)

/*[출력]
arr5 ::  (4) ['a', 'b', 'c', 'e']
*/

let popped = arr5.pop(); // 제거한 요소를 반환 받을 수 있음
console.log('popped :: ' ,popped)
/*[출력]
popped ::  e
*/




//--------------------------------------------
// shift() : 배열의 마지막 요소를 제거
//--------------------------------------------
let arr6 = ['a', 'b', 'c', 'e', 'f'];

// arr = ['b', 'c', 'e', 'f']
arr6.shift(); // 배열의 첫번째 요소를 제거

// arr = ['c', 'e', 'f']
let shifted = arr6.shift(); // 제거한 요소를 반환 받을 수 있음

// shifted = 'b'


let arr7 = [1,2,3,4,5,6,7]
delete arr7[1]
console.log(arr7)
/*[출력]
(7) [1, 비어 있음, 3, 4, 5, 6, 7]
*/



//--------------------------------------------
// from() : 새로운 Array 오브젝트를 생성하고 콜백함수에서 반환된 값을 엘리먼트 값으로 설정하여 반환
//--------------------------------------------
// 첫번째 파라미터 : 변환대상을 지정, Array-like 또는 이터러블 오브젝트를 지정
// 두번째 파라미터 : [옵션] 배열 엘리먼트를 읽을 때마다 호출할 함수를 작성
// 세번째 파라미터 : [옵션] 두번째 파라미터 함수에서 this 로 참조할 오브젝트를 지정



let arrayObj = Array.from({0:'zero',1:'one',length:2});
console.log(Array.isArray(arrayObj));
console.log(arrayObj)

let stringObj = Array.from("ABC");
console.log(stringObj)


/*[출력]
true
[ 'zero', 'one' ]
[ 'A', 'B', 'C' ]
*/




let arrayLike = {0:10,1:30,length:2};
let values = Array.from(arrayLike, 
                        (value)=> {
                            console.log('value :: ',value)
                            console.log('this :: ',this)
                            console.log('bonus :: ',this.bonus)
                            console.log('result :: ',value + this.bonus)
                            return value + this.bonus
                        },
                        {bonus: 100}
                        );

console.log(values);

/*[출력]
value ::  10
this ::  {}
bonus ::  undefined
result ::  NaN
value ::  30
this ::  {}
bonus ::  undefined
result ::  NaN
[ NaN, NaN ]
*/

//------------------------------------------
// function 키워드로 함수를 작성했을때만 this 가 전달됨.
//------------------------------------------
values = Array.from(arrayLike, 
                        function(value) {
                            console.log('value :: ',value)
                            console.log('this :: ',this)
                            console.log('bonus :: ',this.bonus)
                            console.log('result :: ',value + this.bonus)
                            return value + this.bonus
                        },
                        {bonus: 100}
                        );

console.log(values);

/*
value ::  10
this ::  { bonus: 100 }
bonus ::  100
result ::  110
value ::  30
this ::  { bonus: 100 }
bonus ::  100
result ::  130
[ 110, 130 ]
*/



//--------------------------------------------
// of() : 배열 엘리먼트 설정
//--------------------------------------------
// 파라미터 값을 새로운 배열의 엘리먼트로 설정하여 반환.
// 파마미터에 새로운 배열의 엘리먼트에 설정할 값을 작성한다.
// 콤마(,) 로 구분하여 다수를 작성가능함.
// Array.from()은 파라미터에 Array-like or 이터러블 오브젝트를 지정하지만
// Array.of()는 파라미터에 값을 지정한다.


// Array.of() 가 호출되면 우선 Array 오브젝트를 생성한다.
// 그리고, 파라미터에 작성된 순서대로 값을 생성한 배열에 추가한 후 반환.
let arrayObj1 = Array.of(1,2,3,);
console.log(arrayObj1)

/*[출력]
[ 1, 2, 3 ]
*/

let arrayObj2 = Array.of();
console.log(arrayObj2)
/*[출력]
[]
*/





//--------------------------------------------
// copyWithin() : 범위값 복사, 설정
//--------------------------------------------
// 인덱스 범위의 값을 복사하여 같은 배열의 지정한 위치에 설저합니다.
// 파라미터는 3개
// 첫번쨰 : Number 타입, target, 복사한 값을 설정할 시작 인덱스, 두번째와 세번째 파리머터로 복사한 엘리먼트 값을 설정할 시작 인덱스를 지정. 디폴트 값은 0
// 두번쨰 : (선택) Number 타입,배열의 엘리먼트 값을 복사할 시작 인덱스를 작성.디폴트 값은 0
// 세번째 : (선택) Number 타입,배열의 엘리먼트 값을 복사할 끝 인덱스를 작성. 디폴트 값은 배열의 length 값
// ==> 두번째 파라미터의 인덱스 부터, 세번째 파라미터 인덱스 직전까지 배열의 엘리먼트 값을 복사
// ==> 두번쨰와 세번쨰 파라미터를 작성하지 않으면, 전체 배열을 복사


let one = [1,2,3,4,5];
console.log('one :: ' ,one);
console.log('copyWithin:: ' ,one.copyWithin(0,3)); //두번째 파라미터인 인덱스값인 3부터 세번째 파라미터가 없으므로 디폴트인 길이만큼 복사, [4,5] 를 주어진 배열의 0번째 인덱스에 복사
//==>[1,2] 가 [4,5] 로 대체됨.
/*[출력]
one ::  [ 1, 2, 3, 4, 5 ]
copyWithin::  [ 4, 5, 3, 4, 5 ]
*/

let two = [1,2,3,4,5];
console.log('two :: ' ,two);
console.log('copyWithin:: ' ,two.copyWithin(0,2,4));  //두번째 파라미터은 인덱스 2부터 세번째 파라미터인 인덱스 4 직전까지.[3,4] 를 주어진 배열의 0번째 부터 설정

/*[출력]
two ::  [ 1, 2, 3, 4, 5 ]
copyWithin::  [ 3, 4, 3, 4, 5 ]
*/



let three = [1,2,3,4,5];
console.log('three :: ' ,three);
console.log('copyWithin:: ' ,three.copyWithin(3)); //두번째,세번째를 작성하지 않았으므로, 배열전체를 인덱스 3부터 설정

/*[출력]
three ::  [ 1, 2, 3, 4, 5 ]
copyWithin::  [ 1, 2, 3, 1, 2 ]
*/





console.log('')
console.log('')
console.log('-----------------------------------------------')
//Array-like 는 배열이 아닌 Object 오브젝트 이므로, arrayLike1.copyWithin(0,1) 형태로 호출 할 수 없다.
// ==> 아래와 같이 call()을 호출하면서, 파라미터에 arrayLike1 을 지정하면, copyWithin()이 호출된다.
// ==> Array-like 오브젝트의 프로퍼티 키인 0,1,2를 배열의 인덱스로 사용
// ==> 세번째 파라미터인 인덱스 1 부터 끝까지 복사하면 : ["def","가나다"]  
// ==> 이를 두번째 파라미터은 0부터 설정
let arrayLike1 = {0:"abc",1:"def",2:'가나다',length:3};
let one1 = Array.prototype.copyWithin.call(arrayLike1,0,1);
console.log('one1 :: ',one1);


/*[출력]
one1 ::  { '0': 'def', '1': '가나다', '2': '가나다', length: 3 }
*/

function two1(){
    return Array.prototype.copyWithin.call(arguments,3,0,2);
}

//호출하면서 넘겨준 파라미터 값이 arguments 에 설정됨.
// ==> arguments 가 Array-like 오브젝트 이므로, call()의 첫번째 파라미터에 지정해서 copyWithin() 수행 가능
// ==> 인덱스 0부터 인덱스2 직전까지 복사하면, [1,2]가 되고,
// ==> 인덱스 3부터 설정하면 1,2,3,1,2가 된다.
console.log('two1 :: ',two1(1,2,3,4,5));


/*[출력]
two1 ::  [Arguments] { '0': 1, '1': 2, '2': 3, '3': 1, '4': 2 }
*/





console.log('')
console.log('')
console.log('-----------------------------------------------')


//--------------------------------------------
// fill() : 범위값 변경
//--------------------------------------------
// 같은 배열에서 인덱스 범위의 값을 지정한 값으로 변경하여 반환
// 첫번째 파라미터 : 설정할 값
// 두번째 파라미터 : (선택) 범위시작 인덱스, 디폴트 값은 0
// 세번째 파라미터 : (선택) 범위끝 인덱스 ,디폴트 값은 배열의 length 값


let arr1 = [1,2,3];
// 두번째,세번쨰 파라미터를 작성하지 않았으므로, arr1의 배열전체가 변경대상.
console.log('arr1 :: ',arr1.fill(7));
/*[출력] 
arr1 ::  [ 7, 7, 7 ]
*/

let arr2 = [1,2,3,4,5];
// 두번째 파라미터에 1을 설정하였기 때문에 인덱스 1부터 변경대상
console.log('arr2 :: ',arr2.fill(7,1));

/*[출력] 
arr2 ::  [ 1, 7, 7, 7, 7 ]
*/

let arr3 = [1,2,3,4,5];
// 인덱스 1부터 인덱스 3의 직전까지 변경대상
console.log('arr3 :: ',arr3.fill(7,1,3));

/*[출력] 
arr3 ::  [ 1, 7, 7, 4, 5 ]
*/




console.log('')
console.log('')
console.log('-----------------------------------------------')


//--------------------------------------------
// entries() : 이터레이터 오브젝트 생성
//--------------------------------------------
//이터레이터 오브젝트는 {key:value}형태이며, 배열의 인덱스가 key가 되고, 배열의 엘리먼트 값이 value 가 된다.


let values1 = [10,20,30];
//Array 오브젝트의 entries()는 Array 오브젝트로 이터레이터 오브젝트를 생성하여 반환
// 이터레이터 오브젝트의 next()를 호출하면, {value: Array(2), done: false} 형태로 반환.
//  ==> Array(2) 가 된것은 [{0:0},{1:10}]과 같이 배열의 인덱스와 엘리먼트 값이 프로퍼티 형태로 되기 때문.
let iterator = values1.entries();

console.log(iterator.next());
console.log(iterator.next());
/*[출력]
{ value: [ 0, 10 ], done: false }
{ value: [ 1, 20 ], done: false }
[출력:크롬브라우저] {value: Array(2), done: false}
*/



//이터레이터 오브젝트는 for-of 문에 [key,value] 형태로 키와 값을 동시에 작성할 수 있다.
// ==> 이터레이터 오브젝트의 key 값이 key에 설정되고, value값이 value 에 설정된다.
for(var [key,value] of iterator){
    console.log(key ,':',value);
}

/*[출력]
2 : 30
*/

//Array 오브젝트가 이터러블 오브젝트인데....굳이 쓴느 이유가..잘 모르겠넹..
//next()를 쓸려고??
// 생각해보면 이터러블 오브젝트라 이터레이터가 있긴하겠다.
for(var v of values1){
    console.log('v :: ',v);
}
/*[출력]
v ::  10
v ::  20
v ::  30
*/





console.log('')
console.log('')
console.log('-----------------------------------------------')
//--------------------------------------------
// keys() : key 이터레이터 오브젝트 생성
//--------------------------------------------
// 키만 갖는 이터레이터 오브젝트를 생성하여 반환
// 배열 인덱스를 key값으로 사용하여 이터레이터 오브젝트를 생성
// 배열의 엘리먼트 값은 이터레이터 오브젝트에 포함안됨.


let iterator1 = [10,20,30].keys();
console.log(iterator1.next())
/*[출력]
{ value: 0, done: false }
*/

for(var key of iterator1){
    console.log('key :: ' ,key);
}

/*[출력]
key ::  1
key ::  2
*/



console.log('')
console.log('')
console.log('-----------------------------------------------')
//--------------------------------------------
// values() : value 이터레이터 오브젝트 생성
//--------------------------------------------
//value만 갖는 이터레이터 오브젝트를 생성하여 반환
//배열 엘리먼트 값으로 이터레이터 오브젝트를 생성함. 
//배열 인덱스는 이터레이터 오브젝트에 포함되지 않음

// ==> Symbol.iterator() 와 같음.

let iterator2 = [10,20,30].values();
console.log(iterator2.next())
/*[출력]
{ value: 10, done: false }
*/






console.log('')
console.log('')
console.log('-----------------------------------------------')
//--------------------------------------------
// find() : 엘리먼트 값 비교 반환
//--------------------------------------------
//콜백 함수에서 true를 반환하면, 처리중인 엘리먼트 값을 반환합니다.

//첫번째 파라미터 : 배열 엘리먼트를 반복 할때마다 호출할 함수를 작성.
//두번째 파라미터 : (선택) 콜백함수에서 this 로 접근할 오브젝트를 지정

// ==> 콜백함수에 배열엘리먼트, 인덱스, 배열전체를 파라미터 값으로 전달
// ==> 콜밸함수에서 true를 반환하면, find()를 종료하고, 현재 처리중인 엘리먼트를 반환
// ==> 배열 끝까지 콜백함수에서 true를 반환하지 않으면, 최종적으로 undefined를 리턴.
// ==> 콜백함수에서 배열엘리먼트 값을 변경할 수는 없음
// ==> 콜백함수에서 true를 반환하는 값이 배열앞에 있으면 시간단축

let result = [1,2,3].find((value,index,allData) => {
    console.log('value :: ',value);
    if (value === 2 ){
        return true ;
    } 
    
    return false;
});

console.log(result);
/*[출력]
value ::  1
value ::  2
2
*/



result = [1,2,1].find(function (value,index,allData){
    console.log('value :: ' ,value);
    console.log('index :: ',index);
    console.log('allData :: ' ,allData);
    console.log('this.key :: ',this.key);
    return value === 1 && value === this.key ;
},{key:1})

console.log('result :: ' ,result)
/*[출력]
value ::  1
index ::  0
allData ::  [ 1, 2, 1 ]
this.key ::  1
result ::  1
*/







console.log('')
console.log('')
console.log('-----------------------------------------------')
//--------------------------------------------
// findIndex() : 배열인덱스 반환
//--------------------------------------------
//콜백함수 에서 true를 반환하면 처리중인 배열인덱스를 반환.
//첫번째 파라미터 : 배열 엘리먼트를 반복 할때마다 호출할 함수를 작성.
//두번째 파라미터 : (선택) 콜백함수에서 this 로 접근할 오브젝트를 지정
// ==> 콜백함수에 배열엘리먼트, 인덱스, 배열전체를 파라미터 값으로 전달
// ==> 콜밸함수에서 true를 반환하면, findIndex()를 종료하고, 현재 처리중인 배열의 인덱스를 반환
// ==> 배열 끝까지 콜백함수에서 true를 반환하지 않으면, 최종적으로 -1을 리턴.


let res = [10,20,30].findIndex((v,i,arr) =>{
    return v === 20;
});

console.log(res)

/*[출력]
1
*/

res = [10,20,30].findIndex((v,i,arr)=>{return v === 100}); 
console.log(res)

/*[출력]
-1
*/

res = [10,20,30].findIndex(function (value,index,allData){
    console.log('value :: ' ,value);
    console.log('index :: ',index);
    console.log('allData :: ' ,allData);
    console.log('this.key :: ',this.check);
    return value === 30 && value === this.check ;
},{check:30})

console.log(res)
/*[출력]
value ::  10
index ::  0
allData ::  [ 10, 20, 30 ]
this.key ::  30
value ::  20
index ::  1
allData ::  [ 10, 20, 30 ]
this.key ::  30
value ::  30
index ::  2
allData ::  [ 10, 20, 30 ]
this.key ::  30
2
*/