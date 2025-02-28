console.log('1' == 1); //true
console.log(1 == true); //true
console.log("false" == false); // "false" is not false
console.log("false" == true); // "false" is not true either

if("false")
   console.log("Hello false!") //but "false" is true enough here
  // for hard comparisons use === as == gives rise to undesirable events

//task 4.2
console.log('1' === 1); //false
console.log(1 === true); //false
console.log("true" === true); //false

//logical operators
let grade = 67;

if( grade < 50){
   console.log('Failed');
}else{
   console.log('Passed');
}