// if(typeof('10') != 'number'){
//     '10' = parseInt('10');
// }

const value1 = '10';
const value2 = 10;

if (value1 === Number(value2)) {
    console.log("Values are equal");
} else {
    console.log("Values are not equal (but have the same numerical value)");
}
