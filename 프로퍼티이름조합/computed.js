//문자열과 변수를 조합해서 오브젝트의 프로퍼티 이름으로 사용할 수 있다.
let item = {
    ['one'+'two'] : 12
}

console.log(item.onetwo);

//변수 값과 문자열조합의 형태
let item2 = 'tennis';
let sports = {
    // [item2] 와 같이 대괄호[] 안에 변수 이름을 작성하면 변수 값을 프로퍼티 키로 사용함.
    // item2 변수값인 tennis 가 프로퍼티 키가 됨.
    [item2] : 1 ,

    //변수 이름과 문자열을 조합한 형태
    [item2 +'Game'] : '윔블던' ,

    //대괄호[]안에 변수 이름과 문자열을 조합하고 여기에 함수를 나타내는 ()를 첨부하여 함수이름으로 사용한 형태
    [item2 + "Method"] (){
        return this[item2]
    }
};

console.log('sports.tennis ::' ,sports.tennis);
console.log('sports.tennisGame ::' ,sports.tennisGame);
console.log('sports.tennisMethod() ::' ,sports.tennisMethod());


// 디스트럭쳐링과 프로퍼티 이름조합
//프로퍼티 이름을 조합하고 조합한 이름을 디스트럭쳐링(분할할당)으로 값을 할당할 수 있다.
let one = 'sports';
let {[one]:value} = {'cccc':'농구','sports':'bbb'};

console.log('value::',value);
