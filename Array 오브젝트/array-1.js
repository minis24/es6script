/*
Array 오브젝트
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
