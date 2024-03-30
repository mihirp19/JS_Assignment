//question 4
//multiplication function
function mul(x) {
    return function(y) {
        return x * y;
    };
  }
const result = mul(2)(3);
console.log(result);
  