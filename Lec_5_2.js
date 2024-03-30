//set-timeout set-interval
// setTimeout(()=>{
// console.log("SetTime")
// }, 1000);

// setInterval(() => {
//    console.log("SetInterval") 
// }, 10000);

//counter
x=0;
count = setInterval(() => {
    test();
}, 100);
function test(){
    let h2_tag = document.getElementById("h2");
    h2_tag.innerHTML = ++x;
    if(x==100){
        clearInterval(count);
    }
}

//Task: check DOM and BOM;