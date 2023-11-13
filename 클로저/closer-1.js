



//클로저 호출시 주의사항.
// 아래 함수는 다르게 동작함.



//var 변수는 함수레벨 스코프 로서 아래에서 변수 i는 전역 스코프를 갖게됨.
for(var i = 0 ; i< 5;i++){
    setTimeout(function(){console.log(i)},i*1000);
}


//let 변수는 블록레벨 스코프 로서 i는  스코프를 갖게됨.
for(let i = 0 ; i< 5;i++){
    setTimeout(function(){console.log(i)},i*1000);
}


for(var i = 0 ; i< 5;i++){
    setTimeout((function(sec){return function(){console.log(sec)}})(i),i*1000);
}


