function compose() {
    let funcs = Array.from(arguments);

    return function(input) {
        return funcs.reduceRight((accumulator, currentFunc) => currentFunc(accumulator), input);
    };
}

function multiplyBy10(number) {
  return  number * 10;
}
function add10(number) {
    return number + 10;
}
function power(number) {
   return Math.pow(number, 2);
}

let number = +prompt("Enter the number: ");

let composedFunction = compose(multiplyBy10, add10, power);

alert(composedFunction(number));
