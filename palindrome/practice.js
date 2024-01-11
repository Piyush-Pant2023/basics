function isPalindrome(num) {
    const numString = num.toString();
    const reversedString = numString.split('').reverse().join('');
    return numString === reversedString;
}

function findPalindromesInRange(start, end) {
    const palindromes = [];

    for (let i = start; i <= end; i++) {
        if (isPalindrome(i)) {
            palindromes.push(i);
        }
    }

    return palindromes;
}

const startRange = 1;
const endRange = 1000;

const palindromeNumbers = findPalindromesInRange(startRange, endRange);
console.log(`Palindrome numbers between ${startRange} and ${endRange}:`);
console.log(palindromeNumbers);