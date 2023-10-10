
try{
    let obj = Object.assign(null,{x:1})
}catch(error){
    //console.log(error);
    console.log('null 지정 불가');
}

console.log(Object.assign(123));
console.log(Object.assign(456,78));
console.log(Object.assign("ABC",{one:1}))
console.log(Object.assign(Symbol('ABC',{one:1})))

try{
    let obj = Object.assign('ABC','ONE');
}catch(error){
    console.log('파라미터 모두 문자열 사용 불가')
}

let count = {
    current :1,
    get getCount(){
        return ++ this.current;
    }
}

let mergeObj = {};
Object.assign(mergeObj,count);

console.log(mergeObj);
console.log('count:: ',count)