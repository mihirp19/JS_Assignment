//Square Pattern
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        document.write("*");
    }
    document.write("<br>");
}
document.write("<br>");

//Half Pyramid
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        document.write("*");
    }
    document.write("<br>");
}

document.write("<br>");

//Inverted Half Pyramid
for (let i = 1; i <= 5; i++) {
    for (let k = 1; k <= 5 - i; k++) {
        document.write("&nbsp&nbsp");
    }
    for (let j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}