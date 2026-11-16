//Exercise-1
function add(a, b) {
  return a + b;
}
console.log(add(2,3));
console.log(add(10, 20));
console.log(add(-4, 9));
console.log(7);

//Exercise-2
let Message="a is equal to b";

function larger(a, b) {
    if(a>b){
        return a;
    } else if(a===b){
        return Message;
    }
    else
        return b;
}
console.log(larger(5,5));
//Exercise-3
let add=(a,b) => a+b;
console.log(add(4,4));
let largerArrow = (a, b) => a > b ? a : b;
console.log(largerArrow(800,40));