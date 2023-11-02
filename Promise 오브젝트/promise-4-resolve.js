/*
    Promise 오브젝트
    [구문]
    new Promise(function(resolve,reject){
        ....
    });

    [상태]
    1) pending : new Promise()생성, excuter 함수 실행결과에 따르 실행될 함수를 바인딩. 
        ==> excuter 함수를 실행하지 않고 소스끝까지 처리한 후 실행하므로,  Promise 처리의 실행결과를 알 수 없다.
    2) settled  : pending 상태가 종료되면, settled 상태로 변환. 이때, 성공,실패를 알 수 있다. 
    ==> fulfill(성공) :excuter 블록의 코드가 실행 성공. ==> then 의 첫번째 파라미터의 함수 실행. 
    ==> reject(실패) : excu ter 블록의 코드 실행이 실패한 경우. ==> then 의 두번쨰 파라미터의 함수 실행.
*/







//---------------------------------------------------------------
// resolve() : 성공상태의 인스턴스 반환
// ==> 성공[fulfil] 상태의 Promise 인스턴스를 반환함.
//---------------------------------------------------------------
// 파라미터 값에 따라 반환형태가 다름
// 1) 파라미터에 값을 작성하면, 성공 상태의 Promise 인스턴스를 생성하여 반환.
//   ==> 이어서 then()을 작성하면, then()의 첫번쨰 파라미터에 작성한 함수가 호출된다.
// 2) 파라미터에 Promise 인스턴스를 지정하면, 인스턴스를 성공상태로 변환하여 반환.



//Promise.resolve()를 호출하면, Promise 인스턴스를 생성하고, Promise를 성공상태로 설정하여 리턴함.
// ==> __proto__에 첨부된 프로퍼티가 Promise.prototype 연결된 프로퍼티와 같다.
// ==> 이는 new 연산자를 사용하지 않고, Promise.resolve() 를 실행해도 Promise 인스턴스를 생성한다는 의미.
let promiseObj = Promise.resolve(
    {sports: "스포츠", music : "음악"} //then()의 핸들러 함수에 파라미터로 설정하는데 여러값을 전달하기 위해 Object오브젝트로 작성
    // then() 핸들러 함수의 파리미터로 전달됨.
);


//------------------------------
// promiseObj 구조
//   > [[Prototype]]: Promise
//   > [[PromiseState]]: "fulfilled"
//   > [[PromiseResult]]: Object
//     > music: "음악"
//     > sports: "스포츠"
//-------------------------------





//promiseObj의 Promise 인스턴스 실행결과가 성공(fulfil) 상태 이므로, 
// then()의 첫번째 파라미터 함수가 실행됩니다.
// 이시점에서 실행하지 않고, 작성된 코드를 끝까지 처리 한 후 실행됨.
promiseObj.then((param)=>{
    console.log('param :: ',param) // [출력] param ::  {sports: '스포츠', music: '음악'}
    for(let name in param){
        console.log ('#1 :: param[name] :: ',param[name]);  //#1 :: param[name] ::  스포츠
        console.log ('#2 :: name :: ',name);                //#2 :: name ::  sports
    }

    for(let value in param){//위에꺼랑 출력결과가 똑같넹.
        console.log ('#1 :: param[value] :: ',param[value]);  //#1 :: param[value] ::  스포츠
        console.log ('#2 :: value :: ',value);                //#2 :: value ::  sports
    }
})

Promise.resolve(["sports","music"])
.then((param)=>{
    console.log('#3 :: param :: ',param)
})

/* [출력]
#1 :: param[name] ::  스포츠
#2 :: name ::  sports
#1 :: param[name] ::  음악
#2 :: name ::  music
#3 :: param ::  [ 'sports', 'music' ]
*/

//console.log('----------------------')






//Promise.resolve()파라미터에 Promise.resolve()로 생성한 인스턴스를 지정한 형태
//resoleve()의 파라미터 값이 [[PromiseValue]]에 설정된다.
let oneObj = Promise.resolve({sports : '쓰뽀쯔'});
let twoObj = new Promise((resolve,reject)=>{
    resolve();
})

//Promise.resolve()의 파라미터에 Promise 인스턴스를 지정함.
// then()의 핸들러 함수가 실행되면, oneObj 인스턴스의 [[PromiseValue]] 에 설정된 값이 
// 핸들러 함수의 param 파라미터에 설정된다.

Promise.resolve(oneObj).then((param) =>{
    setTimeout(()=>{
        console.log('## 11 :: param',param);
    },1000);
});









//----------------------------------------------
//thenable
// : 오브젝트 안에 then()을 작성한 형태를 thenable 이라고 한다.
// ex ) let obj = {then(resolve,reject){...}}



//Promise.resolve()의 파라미터에 Object 오브젝트를 작성하고, 그 안에 then()을 작성함.
// ==> thenable 이라고 함.
// ==> 이 시점에서는 Promise 인스턴스만 생성하고, then()은 실행하지 않는다.
// ==> 마지막 코드까지 실행한 후 then()을 실행한다.

//obj1에 생성한 인스턴스를 할당한 시점의 [[PromiseStatus]] 값은 'pending'이다.
// ==> then()의 resolve('thenable') 을 호출하기 전까지 'pending'이며, 호출하면, 'resolved' 로 바뀜.
let obj1 = Promise.resolve({
    then(resolve){
        console.log('##### 1 :: then');
        resolve('thenable');
    }
});


//obj1인스턴스에 then()이 있으므로, 아래는 obj1.then().then() 형태가 된다.
// ==> 1) obj1 인스턴스의 then(resolve)가 실행. 
// ==> 2) [출력] ##### 1 :: then
// ==> 3) resolve('thenable') 호출, 이때 [[PromiseValue]]값에 'thenable'이 설정됨
// ==> 4) obj1.then().then() 형태에서 두번째 then()이 호출됨.
// ==> 5) 두번째 then()의 value 파라미터에 [[PromiseValue]] 인 'thenable'이 설정됨.
// ==> 6) [출력] 222222 ::  thenable
obj1.then((value) =>{
    console.log('222222 :: ',value);
});






//resolve() 호출하고 아래에 reject()를 작성하여서 resolve() 호출하고, reject()가 호출될것 같지만
// 성공 또는 실패는 하나만 발생하므로, 먼저 작성한 resolve()만 호출된다.
// 반대로 reject() 호출하고, resolve()를 호출하면, reject()만 호출되고, resolve()는 호출되지 않는다.
let thenable = {
    then(resolve,reject){
        resolve('resolve');
        reject('에러');
    }
}


//obj2인스턴스에 then()이 있으므로, 아래는 obj2.then().then() 형태가 된다.
let obj2 = Promise.resolve(thenable);
obj2.then(
    console.log, // (value) => {console.log(value)} 를 생략한 형태.
    (value) => {console.log('실행되지 않음 :: ',value)} // 위에서 resolve()를 호출하게 되므로 실행되지 않음.
);


