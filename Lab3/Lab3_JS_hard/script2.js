function compose() {
    let funcs = Array.from(arguments);

    return function(input) {
        return funcs.reduceRight((accumulator, func) => func(accumulator), input);
    };
}

const multiplyBy10 = x => x * 10;
const add10 = x => x + 10;
const power = x => Math.pow(x, 2);

let number = +prompt("Enter the number: ");

let composedFunction = compose(multiplyBy10, add10, power);

alert(composedFunction(number));
