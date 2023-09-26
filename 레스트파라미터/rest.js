/* 
레스트파라미터
호출받는 함수의 파라미터에 아래 구문과 같이 스프레드연산자로 파라미터를 작성한 형태를 rest 파라미터라고 함.

[구문]
function(param,paramN,...rest);
호출받는 함수의 파라미터에 파라미터 이름과, rest 파라미터를 같이 작성 할 수 있다.
호출하는 함수의 파라미터에 3개의 파라미터 값을 작성하고,
호출받는 함수의 파라미터에 파라미터 이름을 하나만 작성하면
2개의 파라미터에 값이 설정되지 않음. 
이때, rest파라미터를 작성하면 2개의 파라미터 값이 rest파라미터 배열에 엘리먼트로 설정됨.

*/

let get = (one) =>{
    console.log('one :: ', one);
}

get (...[1,2,3]);

/*
get(...[1,2,3]) 이 get (1,2,3) 형태로 전개 되므로, 호출받는  함수의 파라미터 one 에 1이 설정됨.
호출받는 get 함수가 화살표 함수 이므로,  호출한 함수에서 보낸 파라미터가 arguments 에 설정되지 않음.

따라서, [1,2,3]에서 2와 3을 받지 못함.
이때 rest 파라미터로 작성하면 2와 3을 받을 수 있음.
*/

let get2 = (...rest ) =>{
    console.log('rest :: ' ,rest);
    console.log(Array.isArray(rest));
}

get2(...[1,2,3,]);



let get3 = (one, ...rest)=>{
    console.log('one :: ',one);
    console.log('rest:: ',rest);
}

get3(...[1,2,3]);