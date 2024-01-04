function isPalindrome(number) {
    const originalNumber = number;
    let reversedNumber = 0;

    while (number > 0) {
        const digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10);
    }

    if (originalNumber === reversedNumber) {
        return true;
    } else {
        return false;
    }
}

// Test cases
const numberToCheck = 12321; // Change this number to test different values
if (isPalindrome(numberToCheck)) {
    console.log(numberToCheck + ' is a palindrome.');
} else {
    console.log(numberToCheck + ' is not a palindrome.');
}