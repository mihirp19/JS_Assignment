today = new Date();
var cmas = new Date(today.getFullYear(),11,25);
console.log(cmas);

if(today.getMonth() == 11 && today.getDate() > 25){
    cmas.setFullYear(cmas.getFullYear() + 1);
}

var oneDay = 1000 * 60 * 60 * 24;
