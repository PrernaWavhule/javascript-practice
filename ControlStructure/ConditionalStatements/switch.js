let userRole = "admin";

switch(userRole){
    case "admin" :
        console.log("Full Access granted");
        break;
    case "editor" :
        console.log("Editor Access granted");
        break;
    case "author" :
        console.log("Editor Access granted");
        break;
    case "student" :
        console.log("Student Access granted");
        break;
    default :
        console.log("access denied!");
}

// internally it uses strict equality operator