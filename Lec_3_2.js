//loops
//for(let i=1;i<=x;i++){example condition/statement}
for(let i=0;i<=100;i++){
    console.log(i);
}

for(let j=100;j>=0;j--){
    console.log(j);
}

//Nested for loop
for(let r = 1; r<=5; r++){ //Row
    for(let c = 1; c<=5; c++){ //Column
        document.writeln("*");
    }
    document.write("<br>")
}

document.write("<br>")

for(let row=1;row<=5;row++){
    for(let col=1;col<=row;col--){
        console.log("*")
    }
    // document.write("<br>")
}
//Task: try new patterns