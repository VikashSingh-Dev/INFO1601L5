let str1 ="Hello World";
let str2 = 'Hello World';
let str3 = `
    hello 
    world
`;// template literal (backtick above tab key)

console.log(str1, str2, str3);
// template literals retain spaces in the tag and allow for multiline expressions

// string interpolation
let name = "bob";
let age = 24;

console.log(typeof(name))//string
// name is deprecated as it is a special word in js and it needs to be deprecated to be able to be used freely
console.log(typeof(age))//number

console.log(`Hello my name is ${name}, I'm ${age} years old`);
//Hello my name is bob, I'm 24 years old.

console.log(`I was born in ${2020 - age}`)
//I was born in 1966