function isTruthy(value) {
    if (value) {
        console.log(value, "is truthy");
    } else {
        console.log(value, "is falsy");
    }
}

console.log(isTruthy(12)); //truthy
console.log(isTruthy(0)); //faslsy
console.log(isTruthy(-2)); //truthy
console.log(isTruthy('')); //falsy
console.log(isTruthy([1,2,3])); // truhthy
console.log(isTruthy([])); //truthy
console.log(isTruthy({})); // truthy
console.log(isTruthy(undefined)); // falsy
console.log(isTruthy(null)); // falsy
console.log(isTruthy(true)); // truthy
console.log(isTruthy(false)); // falsy