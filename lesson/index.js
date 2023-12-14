/*
let js = 'amazing';
if (js === 'amazing') alert('Javascript is FUN!');
console.log(40 + 8 + 23 - 10); */

// Types
// let firstName = "Olwaseyi";
// console.log(firstName)
/*
let JavaScriptIsFun = true;
console.log(JavaScriptIsFun)

console.log(typeof true);

console.log(typeof JavaScriptIsFun);

console.log(typeof 23);

console.log(typeof seyi);

JavaScriptIsFun = 'seyi';

console.log(typeof JavaScriptIsFun);

let age = 1999;
console.log(age)
console.log(typeof age);
console.log(typeof null); */
/* 
// Let, Const, and Var.
const now = 2024
const ageKim = now - 1999;
const ageSarah = now - 1998;
console.log(ageKim, ageSarah);

const firstName = 'Kim';
const lastName = 'Kardashian';

// concatenation
console.log(firstName + ' ' + lastName);

// assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x ++; // x = x + 1 = 26
console.log(x);

// comparison operators
console.log(ageKim > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1999 > now - 1998);

// Operator Precedence
const averageAge = (ageKim + ageSarah) / 2;
console.log(ageKim, ageSarah, averageAge); */
/* 
const firstName = 'Olwaseyi';
const job = 'Student';
const birthYear = 1999;

const seyi =  "I'm " + firstName + ', a ' + (2023 - birthYear) + ' years old ' + job + '!';
console.log(seyi);
const seyiNew = `I'm ${firstName}, a ${2023 - birthYear} years old ${job}!`
console.log(seyiNew);

console.log(`Just a regular string...`);


console.log('String with \n\
multiple \n\
lines'); */

/*
const age = 15;
const  isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 1999;

let century;
if (birthYear <= 2000) {
   century = 20;
} else {
    century = 21;
}
console.log(century); */
/*
// Type Conversion and Coercion
const inputYear = '1999';
console.log(Number(inputYear) + 18);

console.log(Number('seyi'));
console.log(typeof NaN);

console.log(String(23), 23);
// Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);

// Truthy and Falsy Values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('seyi'));
console.log(Boolean({}));
console.log(Boolean(''));
console.log(Boolean(null));


const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
} */

/*

// Equality Operators: == vs. ===
// === is strict equality operator
// it does not perform type coercion
// 18 === 18 (true) not 18 === '18' (false)
const age = 18;
if (age === 18) console.log('You just became an adult :D (strict)');

// == is loose equality operator
// it performs type coercion
if (age == '18') console.log('You just became an adult :D (loose)');
// '18' == 18 (true)

// always use strict equality operator. This is because it is predictable
// avoid loose equality operator.. it is not predictable

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);
if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9')
}
// !== is strict inequality operator
// it does not perform type coercion
// 18 !== 18 (false) not 18 !== '18' (true)
if (favourite !== 23) console.log('Why not 23?'); */

// Boolean Logic
