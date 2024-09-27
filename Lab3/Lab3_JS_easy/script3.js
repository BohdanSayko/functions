function isEven(number){
    return number % 2 === 0;
}

let number = +prompt("Enter the number: ");

if(isEven(number)){
    alert("The number is even");
}else{
    alert("The number is odd");
}