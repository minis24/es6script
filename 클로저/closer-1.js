



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
    setTimeout(
        (function(sec){
            return function(){
                console.log(`closer 방식 :: ${sec}`);
            }
        })(i)
        ,i*1000);
}




//긴작업 처리
const longArr = Array.from({0:'aa',1:'bb',length:10},(value,index)=>{
    console.log ('value :: ',value)
    console.log('index ::' ,index);
    //console.log('a ::' ,a);
    return index+1;
});

console.log(longArr)
/*[출력]

_ ::  undefined
VM1886:3 i :: 0
VM1886:2 _ ::  undefined
VM1886:3 i :: 1
VM1886:2 _ ::  undefined
VM1886:3 i :: 2
VM1886:2 _ ::  undefined
VM1886:3 i :: 3
VM1886:2 _ ::  undefined


(1000) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41
*/