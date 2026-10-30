const scan = require("prompt-sync")();

let age = Number(scan("Enter your age: "));

if(age){
    console.log("Correct age");
}else{
    console.log("Incorrect age");
}