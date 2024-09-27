function reversString(string){
    let reversedString = string.split('').reverse().join('');

    return reversedString;
}

let string = prompt("Enter your string:");

alert(reversString(string));