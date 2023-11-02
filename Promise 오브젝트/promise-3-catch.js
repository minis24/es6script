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
// catch() : 실패 핸들러 ==> 실패핸들러(reject)를 정의합니다.
//---------------------------------------------------------------
// 파라미터에 Promise 가 reject 상태가 되었을 떄 실행될 핸들러 함수를 작성한다.
// then()의 첫번째 파라미터에 함수를 작성하고, 두번째 파라미터에는 작성하지 않는다.
// 대신, then().catch() 형태로 작성하고,then()의 두번째 파라미터에 작성할 함수를 catch()의 파라미터에 작성한다.
// then() 은 성공했을때 실해되며, catch()는 실패했을 때 실핸된다.
// 파라미터는 한개만 작성 가능. 여러개 값을 넘겨주려면, 배열 같은 형태로 전달.
//---------------------------------------------------------------
// ==> return 문의 작성과 상관없이 현재 실행중인 Promise인스턴스를 리턴함.
// ==> return 문을 작성하면,return 문의 표현식을 평가한 후 결과를 [[PromiseValue]]에 설정함.
// ==> return 문을 작성하지 않으면, [[PromiseValue]]에 undefined 설정됨.
// ==> catch().then()과 같이 catch() 다음에 then()을 연결 할 수 있으며, 
// ==> catch()에서 설정한 [[PromiseValue]] 값을 then()의 파라미터로 전달.

const create3 = (param) =>{
    return new Promise((resolve , reject)=>{
        param === 'ok' ? resolve(param) : reject(param);
    })
}

create3('fail').then((param)=>{
    console.log('### 성공 :: ',param);
}).catch((param)=>{
    console.log('### 실패 :: ',param);
})

/*[출력]
### 실패 ::  fail
*/






// excuter 블록에서 reject() 를 호출해도 catch() 의 핸들러 함수가 실행되지만,
// 앞의 then()에서 에러가 발생해도 catch()핸들러 함수가 실행된다.
//  ==> 이떄 throw 문에 작성한 '에러발생 상황' 이 핸들러 함수의 파라미터에 설정된다.
const create4 = (param) => {
    return new Promise((resolve,reject)=>{
        resolve('resolve');
    });
}


create4().then(param =>{
    console.log('$$ 1:: then :: param :: ' ,param );
    throw '에러발생 상황';
}).catch((param)=>{
    console.log('$$ 2:: catch :: param :: ',param);
   // return 300;
}).then((param )=>{
    console.log('$$ 3:: then :: param :: ',param);
}).catch((param )=> {
    console.log('$$ 4:: catch :: param :: ',param);
});

/* [출력]
$$ 1:: then :: param ::  resolve
$$ 2:: catch :: param ::  에러발생 상황
$$ 3:: then :: param ::  undefined
*/



