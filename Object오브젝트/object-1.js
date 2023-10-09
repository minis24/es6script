


//(var obj = {key:value}) 형태에서 key값이 같은 프로퍼티를 두 개 작성 했을 때,
// 자바스크립트 에디션 별로 처리하는데 차이가 있음.
// ES3에서는 key 값이 같더라도 추가되고,
// ES5의 strict 모드에서는 에러가 발생함.
// ES6에서는 strict 모드에 관계 없이 에러가 발생하지 않으며, 나중에 작성된 프로퍼티 값으로 대체 된다.
// 나중에 작성된 프로퍼티는 추가되지 않으며, 값만 대체되는 것임.
let samekey = {one:1 , one:2};
console.log('samekey :: ' ,samekey);