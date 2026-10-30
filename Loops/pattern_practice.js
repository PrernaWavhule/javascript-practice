
let n = 5;
let i;

console.log("Square Pattern");
for(i = 1; i <= n; i++){
    console.log("* ".repeat(5));
}

console.log("Right Triangle Pattern");
for(i = 1; i <= n; i++){
    console.log("* ".repeat(i));
}

console.log("Inverted Right Triangle Pattern");
for(i = 5; i >= 1; i--){
    console.log("* ".repeat(i));
}

console.log("Left Triangle Pattern");
for(i = 1; i <= n; i++){
    console.log("  ".repeat(5-i), "* ".repeat(i));
}

console.log("Inverted Left Triangle Pattern");
for(i = 5; i >= 1; i--){
    console.log("  ".repeat(5-i), "* ".repeat(i));
}

console.log("Pyramid Pattern");
for(i = 1; i <= n; i++){
    console.log(" ".repeat(5-i), "* ".repeat(i));  
}

console.log("Inverted Pyramid Pattern");
for(i = 5; i >= 1; i--){
    console.log(" ".repeat(5-i), "* ".repeat(i));
}

console.log("Right Angled Triangle Pattern");
let row;
for(i = 1; i <= n; i++){
    row = "";
    for(j = 1; j <= i; j++){
        row += i + " ";
    }
    console.log(row);
}

console.log("Printing Numbers Pattern");
for(i = 1; i <= n; i++){
    row = "";
    for(j = 1; j <= i; j++){
        row += j + " ";
    }
    console.log(row);
}

console.log("Printing Numbers Pattern");
let count = 1;
for(i = 1; i <= n; i++){
    row = "";
    for(j = 1; j <= i; j++){
        row += count + " ";
        count++;
    }
    console.log(row);
}

console.log("Printing Numbers Pattern");
for(i = 1; i <= n; i++){
    row = "";
    for(j = 1; j <= n; j++){
        row += i + " ";
    }
    console.log(row);
}

console.log("Printing Numbers Pattern");
for(i = 1; i <= n; i++){
    row = "";
    for(j = 1; j <= n; j++){
        row += j + " ";
    }
    console.log(row);
}

