let symbol = prompt("Enter a symbol:");

let strings = [];

for (let i = 0; i < 3; i++) {
    let string = prompt("Enter your string:"); 
    strings.push(string);
}

for (let i = 0; i < 3; i++) {
    alert(symbol + strings[i] + symbol);
}