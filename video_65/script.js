// a = prompt("enter a number");
let a=5;

let factorial = 1;
for (let i = 1; i <= a; i++) {
    factorial = factorial * i;
}
console.log("factorial is " + factorial);
function factorial1(number) {
    let arr = Array.from(Array(number + 1).keys())
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b
})
console.log(c)
}
factorial1(a)