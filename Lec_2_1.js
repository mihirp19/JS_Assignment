//Operators

//Assignment Operators
//EX: var name1 = 24;

//Arithmetic Operators
//EX: +,-,*,/,%

//Relational/Conditional Operators
//EX: >,<,>=,<=,==,!=,===

//Logical Operators
//EX: && ||

//Ternary Operator
//EX: (condition)? true : false;

//Increment && Decrement
//EX: ++, --

var a=10,b=20;
var x=8,y='8';
let name1="hello ",name2 = "javascript";

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

document.write(x+y)
document.write("<br>")
document.write(x-y)
document.write("<br>")
document.write(x*y)
document.write("<br>")
document.write(x/y)
document.write("<br>")

document.write(name1+name2)
document.write("<br>")
//NaN: not a number
document.write(name1-name2)
document.write("<br>")

//Ternary operators
console.log(!(x==y?'true': 'false'))

var store1 = (x==y?'true': 'false')
document.write(store1)
document.write("<br>")


var store2 = (x===y?'true':'false')
console.log(store2)