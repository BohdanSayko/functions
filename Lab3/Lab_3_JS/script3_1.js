function checkAge(userAge){
    if(!isNaN(userAge)){
        if(userAge >= 18){
            console.log("User is adult");
        }else{
            console.log("User is underage");
        }
    }else {
        console.log("Age is wrong");
    }
}

let userAge = +prompt("Enter your age: ");
checkAge(userAge);