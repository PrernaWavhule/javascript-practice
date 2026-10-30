if("0"){
    console.log("This will run because the string '0' is truthy");
}else{
    console.log("This will not run");
}

if(false){
    console.log("This will not run");
}else{
    console.log("This will run because the condition is false");
}

if("false"){
    console.log("This will run because the string 'false' is truthy");
}else{
    console.log("This will not run");
}

if([]){
    console.log("This will run because an empty array is truthy");
}else{
    console.log("This will not run");
}

if({}){
    console.log("This will run because an empty object is truthy");
}else{
    console.log("This will not run");
}

if(1 == "1"){
    console.log("This will run because the string '1' is truthy");
}else{
    console.log("This will not run");
}

if(1 === "1"){
    console.log("This will not run because the string '1' is not strictly equal to the number 1");
}else{
    console.log("This will run because the string '1' is not strictly equal to the number 1");
}

if(1 == 2){
    console.log("This will not run because 1 is not equal to 2");
}else{
    console.log("This will run because 1 is not equal to 2");
}