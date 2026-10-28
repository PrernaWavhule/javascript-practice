let userRole = "student";

if(userRole == "admin"){
    console.log("Full Access granted");
}
else if(userRole == "editor"){
    console.log("Editor Access granted");
}
else if(userRole == "author"){
    console.log("Author Access granted");
}
else{
    console.log("Student Access granted");
}

switch(userRole){
    case "admin" :
        console.log("Full Access granted");
    case "editor" :
        console.log("Editor Access granted");
    case "author" :
        console.log("Editor Access granted");
    case "student" :
        console.log("Student Access granted");
    default :
        console.log("access denied!");
}