//import prompt sync
const prompt = require ("prompt-sync")();
//global variables 
const ROW = 6;
const COLS = 3;
const SYMBOLS_COUNT = {
    A : 2,
    B : 4,
    C : 6,
    D : 8
};
const SYMBOL_VALUES = {
    A : 5,
    B : 4,
    C : 3,
    D : 2
};
//arrow function
const deposit = () => {
    while(true){
 const depositAmount = prompt("Enter a deposit amount: ")
const numberDepositAmount = parseFloat(depositAmount);
if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
    console.log("Invalid deposit amount, try again!");
}else{
    return numberDepositAmount;
}
    }

};
let balance = deposit();
console.log(balance);

//get number of lines to bet on
const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter the number of lines 1-3: ")
       const numberOfLines = parseFloat(lines);
       if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
           console.log("Invalid number of lines, try again!");
       }else{
           return numberOfLines;
       }
           }
};
const numberOfLines = getNumberOfLines();
console.log(numberOfLines);

//get the bet amount
//depends on the deposit amount
//depends on the number of lines is placed
const getBetAmount = (balance , numberOfLines) => {
    while(true){
const betAmountEntry = prompt("Enter your bet amount per line: ");
const betAmount =parseFloat(betAmountEntry);
if(isNaN(betAmount) || betAmount <= 0 || betAmount > balance / numberOfLines){
    console.log("Invalid bet amount! try again!");
}else{
    return betAmount
};
    };
};
const betAmount = getBetAmount(balance, numberOfLines);
console.log(betAmount);