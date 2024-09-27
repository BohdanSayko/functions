function factorial(number){
    let factorial = 1;
    
    for(let i = 1; i <= number; i++){
        factorial *= i;
    }

    return factorial;
}

let number = +prompt("Enter the number: ");

alert("Factorial for this number is: " + factorial(number));