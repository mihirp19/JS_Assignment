//functions
//1) Pre-defined functions  EX: document.write()
//2) User-defined functions
// 2 types of user-defined functions
// with parameters(a,b)
// without parameters()

function add(){
    let num1 = document.getElementById("num1").value;
    console.log("num1 = ", num1);
    let num2 = document.getElementById("num2").value;
    console.log("num2 = ", num2);
    var res = parseInt(num1) + parseInt(num2) 
    console.log("res = ", res);
    let result = document.getElementById("res");
    result.innerHTML = res;
}