// functions
function hello() {
    console.log("hello");
  }

function add(a, b){
    return a + b;//undefined + undefined = NaN
 }
 
 let ans = add(5, 1);
 console.log(ans); //6
 
 let ans2 = add();
 console.log(ans2); //NaN

 // default parameters
 function add(a, b=10){
    return a + b;
}

console.log(add(5,11)); // logs 16

console.log(add(2));// logs 12