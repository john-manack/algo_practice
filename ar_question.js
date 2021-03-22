// Problem: Given an input of a larger number, write an 
// algorithm that adds up the digits of the number to a sum. 
// If the sum is more than one digit, repeat the process until 
// you have a sum that is one digit.

// Ex input: '999'
// Ex output: '9' 
// Logic: '999' --> '27' --> '9' 

// Ex input: '8767984'
// Ex output: '4'
// Logic: '8767984' --> '49' --> '13' --> '4'

// Givens 
// -- The input will be in the form of a string, though it represents a number 
// -- The string will only have digits (not letters or other characters)

const num1 = '8767984'
const num2 = '999'

function getToSingleNumber(num) {
    const sumDigits = (num) => {
        let newInt = 0;
        for (let i = 0; i < num.length; i++ ) {
            let digit = parseInt(num[i], 10);
            newInt += digit;
        }
        return newInt.toString();
    }

    let checkValue = sumDigits(num);
    while (checkValue > 9) {
        checkValue = sumDigits(checkValue)
    }

    return checkValue;
};

console.log(getToSingleNumber(num1));
console.log(getToSingleNumber(num2));