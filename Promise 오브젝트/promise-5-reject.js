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
// reject() : 실패상태의 인스턴스 반환
// 파라미터에 실패사유를 작성 합니다.
//---------------------------------------------------------------


// Promise.reject()를 실행하면 reject 상태의 Promise 인스턴스를 생성해서 리턴
// [[PromiseState]]: "rejected"
let promiseObj = Promise.reject('reject 될만해서 reject');


// Promise 인스턴스 상태는 "rejected" 이므로 then()의 두번쨰 파라미터 함수가 호출됨.
promiseObj.then(
    console.log,
    (param) => {console.log('에러 :: ' ,param)}  //<=== 두번째 함수가 실행.
)

/*[출력] 에러 ::  reject 될만해서 reject */






let errorObj = new Error('에러');
let promiseObj2 = Promise.reject(errorObj);  //[[PromiseValue]] 값에 Error 인스턴스 설정


//promiseObj2의 인스턴스가 rejected 상태이므로, then()의 두번쨰 파라미터 핸들러 함수가 실행됨.
promiseObj2.then(
    console.log,
    (error) =>{console.log('에러 1 :: ',error.message)}  // <== 실행됨. error 파라미터 에 [[PromiseValue]]값이 내려옴.
);


//Promise.reject ()에 Error 인스턴스를 설정하면 catch()에서 errorObj의 Error인스턴스를 사용할 수 있음.
// 생성한 인스턴스가 rejected 상태이므로, catch()핸들러 함수가 호출된다.
//  ==> 이떄 error 파라미터에 errorObj의 Error 인스턴스가 전달된다.
Promise.reject(errorObj)
        .catch(error => console.log('에러 2 :: ',error.message));



//Promise.reject(errorObj)로 인스턴스를 생성하고, 이어서 then()을 작성한 형태.
// 인스턴스 상태가 reject 이므로, then()에서 두번쨰 파라미터 함수가 호출됨.      
Promise.reject(errorObj)
        .then(
            (param) => {console.log('정상 3 :: ', param)} ,
            (error) => {console.log('에러 4 :: ',error.message)}
        )
