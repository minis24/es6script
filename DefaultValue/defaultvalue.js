//변수,파라미터,프로퍼티에 값이 할당되지 않을 때 사전에 정의한 값이 할당됨.
//일반적인 디폴트값과는 좀 다름.
// let 변수를 선언하면 디폴트값으로 undefined 가 설정됨.
// 반면 defaultValue는 let 변수를 선언하면서 값이 설정되지 않았을때 할당될 값을 사전에 작성해 두는 형태.


/*
let [one,two,five=5] = [1,2];
console.log('five:: ',five);

출력 : five::  5
*/

let [one,two,five=5] = [1,2,77];
console.log('five:: ',five);

/*
출력 : five::  77
*/


let {six,seven=7} = {six:6}
console.log(six,seven)
