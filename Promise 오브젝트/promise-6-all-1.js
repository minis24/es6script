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
// all() : 파라미터의 모든 Promise 인스턴스가 성공상태이면 핸들러 실행.
//---------------------------------------------------------------
// 1) 파라미터에 이터러블 오브젝트를 작성. 이터러블 오브젝트에 작성한 순서대로 Promise 인스턴스 생성
// 2) 생성한 모든 Promise 인스턴스가 성공상태이면 then()의 첫번쨰 파라미터 함수를 실행.
// 3) Promise 인스턴스가 하나라도 실패하면 then()의 핸들러 함수를 실행하지 않음.

// excuter 블록에서 resolve() 를 호출한 순서가 아닌, Promise 인스턴스를 생성한 순서로
// 파라미터 값을 배열에 첨부하여 [[PromiseValue]]에 설정함.
// then()의 첫번쨰 함수의 파라미터 값으로 사용.

function order(mili){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log('1 :: 실행 :: mili :: ',mili);
            resolve(mili);
        }, mili);
    });
}

// Promise.all() 파라미터에 order() 호출을 배열로 작성
// 첫번째 엘리먼트부터 차례로 order()함수를 호출.
Promise.all([order(300),order(200),order(100)])
    .then(console.log);

// ==> Promise 생성이 300,200,100 순서로 생성
// ==> setTimeout() 콜백함수는 지연시간으로 인해 100,200,300 순서로 실행 


/*[출력] 
1 :: 실행 :: mili ::  100
1 :: 실행 :: mili ::  200
1 :: 실행 :: mili ::  300
[ 300, 200, 100 ]
*/




function order1(mili){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log(mili);
            mili === 200 ? reject('reject') :resolve(mili);
        },mili);
    });
}

// Prmise.all()은 매번 then()의 핸들러 함수를 실행하지 않고,
// order1(300),order1(200),order(100)의 순서대로 Promise 인스턴스가 생성되고
// timeout지연값에 의해 100,200,300의 순서대로 setTimeout()의 콜백함수가 호출됨.
// 첫번째 100이 호출되었을떄 resolve()가 호출이 되지만, Promise.all()은 매번 then()의 핸들러 함수를 실행하지 않고,
//  전체가 끝났을때 한번만 실행하므로, then()의 핸들러 함수가 실행되지 않습니다.
// 다음 200이 호출되었을때, reject()가 호출됨.
// ==> Promise.all()이 전체가 끝났을때 then()핸들러 함수를 실행하지만, 중간에 실패(reject) 가 발생하면,
// ==> 바로 then()의 두번째 핸들러 함수를 실행한다.

Promise.all([order1(300),order1(200),order1(100)])
    .then((milis) => {
        console.log('then resolve ')
    },
    (error) => {
        console.log('then error :: ',error);
    })

/*[출력]
100
200
then error ::  reject
300
*/