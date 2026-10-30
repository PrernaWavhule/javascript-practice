const prompt = require('prompt-sync')();

let pin = 1234; // Assuming the correct PIN is 1234
console.log("Enter your PIN: ");
let enteredPin = Number(prompt("PIN: "));

if(enteredPin === pin){
    console.log("PIN accepted. You can proceed with your transaction.");

    console.log("1. Check Balance");
    console.log("2. Withdraw Cash");
    console.log("3. Deposit Cash");
    console.log("4. Exit");

    let choice = Number(prompt("Enter your choice: "));
    switch(choice){
        case 1:
            console.log("Your balance is $1000");
            break;
        
        case 2:
            let withdrawAmount = Number(prompt("Enter amount to withdraw: "));
            if(withdrawAmount <= 1000){
                console.log(`You have withdrawn $${withdrawAmount}. Your new balance is $${1000 - withdrawAmount}`);
            }
            else{
                console.log("Insufficient balance.");
            }
            break;

        case 3:
            let depositAmount = Number(prompt("Enter amount to deposit: "));
            console.log(`You have deposited $${depositAmount}. Your new balance is $${1000 + depositAmount}`);
            break;
        
        case 4:
            console.log("Thank you for using our ATM. Goodbye!");
            break;
        
        default:
            console.log("Invalid choice. Please try again.");
    }

}

else{
    console.log("Incorrect PIN. Please try again.");
}