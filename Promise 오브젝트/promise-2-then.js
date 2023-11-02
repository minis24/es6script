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
// then() : 성공/실패 핸들러 
//---------------------------------------------------------------
//
// then ()의 첫번쨰 파라미터에 Promise 가 성공상태일떄 실행될 핸들러 함수 작성
// ==> return 문의 작성과 상관없이 현재 실행중인 Promise인스턴스를 리턴함.
// ==> return 문을 작성하면,return 문의 표현식을 평가한 후 결과를 [[PromiseValue]]에 설정함.
// ==> return 문을 작성하지 않으면, [[PromiseValue]]에 undefined 설정됨.
// ==> Promise 체인에서 첫번째 then()에서 설정된 [[PromiseValue]] 가 두번쨰 then()의 파라미터로 설정됨.
//---------------------------------------------------------------
// 두번째 파라미터에 Promise가 실패 상태가 되었을 때 실행될 핸들러 함수 작성.
//---------------------------------------------------------------
//
// ==> 두 함수 모두 파라미터는 한개만 작성 가능. 여러개 값을 넘겨주려면, 배열 같은 형태로 전달.



const create2 = ()=>{
    return new Promise(resolve=>resolve(100));
}

create2().then(()=>{console.log('1 :: then')});

create2().then((param)=>{
    console.log('2 :: then :: param :: ',param );
    return param + 50;
})

create2().then((param) => {
    console.log('3 :: then :: param :: ',param);
    return param + 70 ;
}).then((param)=>{
    console.log('4 :: then :: param :: ',param);

    
});





