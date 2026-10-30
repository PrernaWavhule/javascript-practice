const prompt = require("prompt-sync")();

let i, j;
let row;
let n = prompt("Enter the number of rows: ");

for(i = 0; i <= n; i++){
    row = "";
    for(j = 0; j <= n; j++){
        row = row + "* ";
    }
    console.log(row);
}

console.log();

// Hollow Square Pattern
for(i = 0; i <= n; i++){
    row = "";
    for(j = 0; j <= n; j++){
        if(i == 0 || j == 0 || i == n || j == n){
            row += "* ";
        }
        else{
            row += "  ";
        }
    }
    console.log(row);
}

// Special Square Pattern

for(i = 0; i <= n; i++){
    row = "";
    for(j = 0; j <= n; j++){
        if(i == 0 || j == 0 || i == n || j == n || i ==j || i + j == n || 
            i == Math.floor(n/2) || j == Math.floor(n/2) || i + j == Math.floor(n/2) ||
            i - j == Math.floor(n/2) || j - i == Math.floor(n/2) || i +j == n + Math.floor(n/2)
        ){
            row += "* ";
        }
        else{
            row += "  ";
        }
    }
    console.log(row);
}

// console.log("hi".repeat(6));

for(let i = 1; i <= 5; i++){
    let r = "";
    console.log("* ".repeat(5));
}

for(let i = 1; i <= 5; i++){
    console.log("* ".repeat(i));
}

for(let i = 5; i >= 1; i--){
    console.log("* ".repeat(i));
}

for(let i = 1; i <= 5; i++){
    console.log("  ".repeat(5-i) + "* ".repeat(i));
}