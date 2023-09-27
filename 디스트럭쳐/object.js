let {one,two} = {one:1 , nine:2};
console.log('one,two ::' , one,two);



//변수를 할당하기 전에 선언하지 않고, 변수선언과 할당을 한 번에 하려면,
// let {one,two} 형태로 Object 리터럴 "{}" 앞에 let 키워드를 작성한다.
// 오브젝트 할당에서 사전에 선언된 변수를 사용하려면
// 소괄호() 안에 할당 코드를 작성한다.

/*  () 를 안해주면 오류.
let three,four;
{three,four} = {three:3,four:4}
*/
let three,four;
({three,four} = {three:3,four:4})
console.log('three,four::' ,three,four)

//또는 
let {five,six} = {five:5,six:6}
console.log('five,six::' ,five,six);


//왼쪽과 오른쪽에 one 이 있는데, 이 형태에서 one은 변수가 아닌 프로퍼티 키.
//왼쪽과 오른쪽에 one 으로 프로퍼티 키의  값으로 같은 위치의 seven 변수에 10, eight 변수에 20 이 할당됨.
let seven,eight;
({one:seven,two:eight}={one:10,two:20});
console.log('seven,eight::',seven,eight);


//왼쪽과 오른쪽에 a가 있으므로, 9가 할당됨.
//왼쪽과 오른쪽에 b가 있고, 프로퍼티 키입니다만, 오브젝트 분할 할당에서 b는 경로(구조)를 맞추기 위한 것임.
//b를 프로퍼티키로 해서 프로퍼티값을 출력하면 ReferenceError 가 발생함.(참조할 수 없으며, 존재하지 않는다는 의미)
//b를 제외하고 분할하면 {ten} = {ten:10}이 되어, 10을 ten 변수에 할당함.
//왼쪽에 b가 아닌 다른 이름을 작성하면,경로(구조) 가 맞지 않아서 TypeError가 발생.
let {a,b:{ten}} = {a:9,b:{ten:10}};
console.log('a,ten::' , a,ten);

//console.log('a,b::' , a,b);


//let {c,h:{d}} = {c:10,k:{d:20}}
//console.log(c,d)



function total({one,plus:{two,five}}){
    console.log(one + two + five);
}
//one = 1
//two = 2
//five = 3
total({one:1, plus:{two:2,five:3}});