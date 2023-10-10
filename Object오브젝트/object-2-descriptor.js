

//디스크립터(descriptor)는 ES5에서 제시.
// 아래 코드에서 'book' 이 프로퍼티 이름.
// 디스크립터는 데이터 프로퍼티 디스크립터 타입과 액세스 디스크립터 타입으로 분류
//  - 데이터 프로퍼티 디스크립터
//  - 액세스 프로퍼티 디스크립터
// {value:123,enumerable:true} 가 프로퍼티 디스크립터
// 프로퍼티 디스크립터는 속성이름(enumerable) 과 속성 값(true) 로 구성
// {value:123} 에서 123 이 프로퍼티 값이 된다.
Object.defineProperty({},'book',{
    value : 123 ,
    enumerable : true
}) ;


// ##!! 데이터 타입의 value ,writable 속성과, 액세스 타입의 get,set 속성을 같이 작성 할 수 없다.
//{value:1,get:function(){}} ==> value 속성과, get 속성을 같이 작성하면 에러 발생함.




/* 
속성기능
value 속성은 프로퍼티 값으로 사용, {value : ‘값’} 형태로 사용
writable 속성이 true ==>{writable:true}  이면, 속성값을 변경할 수 있다.
{enumerable :true } 이면, for-in 문으로 열거 할 수 있다.
{configuable: true } 이면, 프로퍼티를 삭제 할 수 있으며, value 이외의 속성을 수정 할 수 있다.


스펙에서 { writable : true } 를 대괄호 두개로 기술
    [[writable ]] : true  와 같이 기술
    enumerable, configurable 도 마찬가지


[프로퍼티 디스크립터]
-----------------------------------------------------------------------------------------------
    타입      속성이름           속성값 형태                디폴트 값       개요
-----------------------------------------------------------------------------------------------
데이터        value            Javascript 데이터형태     undefined      프로퍼티 값으로 사용
            writable         true/false              false         false : 속성값 변경 불가
-----------------------------------------------------------------------------------------------
액세스        get              function/undefined     undefined      프로퍼티 getter 함수
            set              function/undefined     undefined      프로퍼티 setter 함수
-----------------------------------------------------------------------------------------------
공용         enumerable       true/false              false         false : for-in 으로 열거 불가
            configurable     true/false              false         false : 프로퍼티 삭제 불가
*/



//get,set 속성
//getter , setter 기능 제공

let obj = {};
Object.defineProperty(obj,'book',{
    get(){
        return '책';
    }
});
console.log(obj)
//getter 는 obj.book() 처럼 함수를 호출하는 형태로 작성하지 않고, obj.book처럼 함수 이름만 작성한다.
console.log('obj.book ::: ' ,obj.book);


/*출력결과 
{}
obj.book :::  책
*/


//ES6 의 getter 형태
obj = {
    value : 123 ,
    get getValue (){
        return this.value;
    }
}

console.log('getValue :: ',obj.getValue)

/*
엔진이 (obj.item : ‘야구’) 를 해석하면
    1) obj 오브젝트에서 item 프로퍼티 작성여부 체크해서 작성이 되어 있으면,
    2) set 속성의 존재 여부를 체크하여, 존재하면, set 속성값인 함수를 실행한다.
    3) setter 가 호출되면, this.sports 에 넘겨받은 프로퍼티(‘야구’) 를 obj 오브젝트의 sprots 프로퍼티에 설정함.
*/





Object.defineProperty(obj,'item',{
    set(param){
        // this 가 obj 를 참조함.
        this.sprots = param;
    }
});

obj.item = '야구';
//obj.sports 는 getter 인데, get 속성을 작성하지 않았지만, 디폴트 getter가 호출되어
//obj 오브젝트의 sports 프로퍼티 값을 반환한다.
console.log('obj.sports ::: ' , obj.sprots  );
console.log(obj)

let obj3  = {
    set setValue(param){
        this.value = param;
    }
}
obj3.setValue = 12345;
console.log(obj3.value);



/*출력결과 
obj.sports :::  야구
{ sprots: '야구' }
*/