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
    ==> reject(실패) : excuter 블록의 코드 실행이 실패한 경우. ==> then 의 두번쨰 파라미터의 함수 실행.
*/


const create = () =>{
    //new Promise() 로 인스턴스 생성시
    // ==> 파라미터로 들어온 excuter 함수 즉시 실행됨.
    return new Promise((resolve,reject)=>{
        //resolve() 는 호출되지 않고, 아래 코드로 넘어감.
        //resolve() 는 바로 호출하지 않고, 호출 할 수 있는 환경이 되었을때 호출. 
        resolve('1111');

        console.log('1 :: resolve  ' , resolve);
    });
}


//create() 호출시 Promise 인스턴스를 리턴함.
// 이떄 .then 이하 코드를 바로 실행하지 않고, 다음의 코드로 넘어가서 '2 :: 끝' 이 출력됨.
// ==> 코드의 끝까지 실행이 되어 더이상 코드가 없음.
// ==> 이제 then() 에 작성한 Function 이 실행됨.(3:: 성공이 출력됨)
// == then() 은 두개의 파라미터를 갖고 있음.(성공시, 실패시 처리하는 함수)
create().then((res)=>{
    console.log('3 :: 성공 :: res :: ',res)
},()=>{
    console.log('4 :: 실패 ')
}
);

console.log('2 :: 끝 ')

/*[출력]
1 :: resolve   [Function (anonymous)]
2 :: 끝 
3 :: 성공 :: res ::  1111
*/



//---------------------------------------------------------------
// new Promise() 인스턴스 생성
//---------------------------------------------------------------
const create1 = (param)=>{
    //Promise 인스턴스 생성
    // ==> excuter 파라미터에 resolve,reject 설정
    // ==> 엔진은 Function오브젝트 생성하여, resolve , reject  에 할당.
    // ==> Promise 인스턴스를 리턴한 후, create1() 에 연결된 then()의 파라미터에 작성한 함수와 연결.
    // ==> resolve 는 then의 첫번째 파라미터에 연결.
    // ==> reject 는 then 의 두번쨰 파라미터에 연결.
    return new Promise((resolve,reject) => {
        console.log('param :: ',param)
        if(param === 'ok'){
            resolve(param);
            console.log('5 :: ', resolve);
        } else{
            reject (param);
        }
    }); 
} 


create1('ok').then((param) => {
    console.log( '6 :: 성공 :: ', param);
}, (param)=>{
    console.log('7 :: 실페 :: ',param)
})


console.log(' 8 :: 끝')


create1('ok11').then((param) => {
    console.log( '9 :: 성공 :: ', param);
}, (param) =>{
    console.log('10 :: 실페 :: ',param)
})
/*[출력]
param ::  ok
5 ::  [Function (anonymous)]
8 :: 끝
param ::  ok11
3 :: 성공 :: res ::  1111
6 :: 성공 ::  ok
10 :: 실페 ::  ok11
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