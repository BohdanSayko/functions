function createIdGenerator(prefix) {
    let counter = 0;

    return function() {
        counter++;
        return prefix + "-" + counter;
    };
}

let prefix = prompt("Enter a prefix: ");
let generateId = createIdGenerator(prefix);

for (let i = 0; i < 5; i++) {
    alert(generateId()); 
}
