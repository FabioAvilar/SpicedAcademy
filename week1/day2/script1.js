// TypeOfOperator


console.log(typeof 'test'); // string

console.log(typeof 99); // number

console.log(typeof function(){}); // function

console.log(typeof {}); // object

console.log(typeof [1,2,3]); // object

console.log(Array.isArray([1,2,3])); // true

console.log(Array.isArray('pizza')); // false

let n = null;

console.log(n);

n === null; // true

console.log(n);

console.log(typeof NaN); // number why??

console.log(isNaN(NaN)); // true

console.log(
    "cast strings to numbers, numbers to strings, booleans to numbers, etc"
);


console.log(typeof String(666)); // 666
console.log(typeof Number('100')); // 100


function sayHello(name, time) {
    if (time > 12) {
        console.log(' Good afternoon ' + name);
    } else {
        console.log('good morning ' + time);
    }
}

console.log(sayHello('fabio', 11));
