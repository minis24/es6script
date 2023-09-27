let one,two,three,four,five;
const values = [1,2,3];

[one,two,three] = values;
console.log('A::',one,two,three);


[one,two] = values;
console.log('B::',one,two);


[one,two,three,four] = values;
console.log('C::',one,two,three,four);


[one,two,[three,four]] = [1,2,[73,74]];
console.log('D::',one,two,three,four);


let other;
[one,...other] = [1,2,3,4,];
// 스프레드 연산자로 other 변수를 작성하였기 때문에
// one 에 1 이 할당되고
// 나머지 [2,3,4]는 other에 할당됨
console.log('other::',other);