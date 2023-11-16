console.log('a');
setTimeout(()=>{console.log('b')},0)

Promise.resolve().then(()=>{
    console.log('c');
})


//브라우저에 리페인트 전에 콜백함수 호출.
window.requestAnimationFrame(()=>{
    console.log('d');
})