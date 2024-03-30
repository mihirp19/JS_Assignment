//conditional statement
//Types:
//if statement: one condition true
var x = 19;
if(x>18){
    console.log("Eligible for driving.");
}
//if else statement: one condition true and false
var y = 17;
if(y>=18){
    console.log("Eligible for Voting");
}
else{
    console.log("Not Eligible for Voting")
}
//if elseif else statement: multiple conditions check
var y = -17;
if(y>=18){
    console.log("Eligible for Voting");
}
else if(y<0){
    console.log("Invalid Age")
}
else{
    console.log("Not Eligible for Voting")
}
//Nested if-else statement
var x = 4;
if(2!=4){
    if(3==4){
        console.log("NestedIf")
    }
    else{
        console.log("NestedElse")
    }
}
else{
    console.log("MainElse")
}
//switch case