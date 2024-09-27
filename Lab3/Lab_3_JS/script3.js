let userAge = +prompt("Enter your age: ");

if(!isNaN(userAge)){
    if(userAge >= 18){
        alert("User is adult");
    }else{
        alert("User is underage");
    }
}else {
    alert("Age is wrong");
}