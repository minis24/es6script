//for-of 문은 이터러블 오브젝트를 반복하여 처리.

/* [구문]
    for(variable of iterableOjbect){
        코드
    }
*/

for(var value of [10,20,30]){
    console.log(value)
}

//value 변수값을 변경하지 않도록 const 로 선언
for(const value of [10,20,30]){
    console.log(value)
}


//문자열 반복
for(let str of "abc"){
    console.log(str)
}

//NodeList 반복
let nodes =document.querySelectorAll("li");
console.log(nodes);
for(let node of nodes){
    console.log(node.textContent);
}


//디스트럭쳐링
let values = [
    {item:'선물1', amount:{apple:10,candy:20}} ,
    {item:'선물2', amount:{apple:30,candy:40}} ,
];

for (let {item:one,amount:{apple:two,candy:five}} of values ){
    console.log(one,two,five);
}