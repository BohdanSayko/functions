function formatMessage(strings, symbol){
    for (let i = 0; i < 3; i++) {
        console.log(symbol + strings[i] + symbol);
    }
}

let symbol = prompt("Enter a symbol:");

let strings = [];

for (let i = 0; i < 3; i++) {
    let string = prompt("Enter your string:"); 
    strings.push(string);
}

formatMessage(strings, symbol);