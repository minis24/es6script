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
// race() : 처음 한번만 then() 핸들러 함수를 실행.
//---------------------------------------------------------------
// 파라미터에 이터러블 오브젝트를 작성함.
// 이터러블 오브젝트에 작성한 순서로 Promise인스턴스를 생성함.
// 처음 한번 만 인스턴스의 성공과 실패에 따른 then()핸들러 함수를 호출하고, 그다음부터는 호출하지 않음.


function order(mili){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('1 :: mili :: ', mili);
           // mili === 100 ? reject('reject') :resolve(mili); // reject() 먼저 실행시컴.
            mili === 200 ? reject('reject') :resolve(mili);

        }, mili);
    })
}



//300,200,100 의 순서로 Prmise 인스턴스가 생성되고,
//100,200,300 의 순서로 resolve 가 호출되게 된다.
// 첫번째 resolve(100)이 호출되면, then()의 첫번째 파라미터 핸들러 함수가 실행되며,
// 두번째 resolve(200)이 호출되더라도, Promise.race()는 한번만 then()핸들러 함수가 실행되므로,
// 핸들러 함수가 실행되지 않습니다. 
// ==> reject()를 먼저 실행시켜서 error 가 먼저 실행이 되도, 마찬가지로 두번째 then()은 실행되지 않음.
Promise.race([order(300),order(200),order(100)])
    .then((milis)=>{
        console.log('then :: ' ,milis)
    },
    (error) =>{
        console.log('error :: ' ,error)
    }
    )


/*[출력]  
1 :: mili ::  100
then ::  100
1 :: mili ::  200
1 :: mili ::  300
*/

/* [출력] ==> reject 먼저 실행
1 :: mili ::  100
error ::  reject
1 :: mili ::  200
1 :: mili ::  300
*/