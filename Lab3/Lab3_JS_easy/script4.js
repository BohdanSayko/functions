function power(number, powered){
    return Math.pow(number, powered);
}

let number = +prompt("Enter the number: ");
let powered = +prompt("Enter the power for the number: ");

alert (power(number, powered));