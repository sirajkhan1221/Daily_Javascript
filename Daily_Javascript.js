// Day 1: Write a function that takes an array of numbers and returns the sum of all the numbers.
const numbers = [1, 5, 8, 9, 4, 6, 7, 8];

//soultion 1
function sumOfNum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// solution 2
const sum = numbers.reduce((current, next) => {
  return current + next;
}, 0);

console.log(sum);

console.log(sumOfNum(numbers));
// Day 2: Write a function that takes a string and returns the reverse of the string.

const string = "hello";

// solution 1
function revString(string) {
  let revStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    console.log(string[i]);
    revStr = revStr + string[i];
  }
  return revStr;
}

// solution 2
let reverseStr = string.split("").reverse().join("");

console.log(reverseStr);

console.log(revString(string));

// Day 3: Write a function that takes two numbers and returns the greater of the two.

function compare(a, b) {
  return a > b ? a : b;
}

console.log(compare(5, 7));

// Day 4: Write a function that takes an array of numbers and returns the average of all the numbers.

const arrofNum = [11, 4, 8, 9, 10, 14];

function avgofNum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(avgofNum(arrofNum));

// Day 5: Write a function that takes a string and returns the number of vowels in the string.

const letter = "camel";

// solution 1
function countVowels(letter) {
  let count = 0;
  let str = letter.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count += 1;
    }
  }
  return count;
}

function foundVowels(letter) {
  let count = 0;
  for (let i = 0; i < letter.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(letter[i])) {
      count += 1;
    }
  }
  return count;
}

console.log(foundVowels(letter));

console.log(countVowels(letter));

// Day 6: Write a function that takes a number and returns true if it is even, false otherwise.
// Day 7: Write a function that takes a string and returns true if it is a palindrome, false otherwise.
// Day 8: Write a function that takes an array of strings and returns the longest string in the array.
// Day 9: Write a function that takes a number and returns the factorial of that number.
// Day 10: Write a function that takes a string and returns the number of words in the string.
// Day 11: Write a function that takes two arrays and returns a new array that contains only the common elements between the two arrays.
// Day 12: Write a function that takes an array of numbers and returns a new array with only the unique elements.
// Day 13: Write a function that takes a string and returns true if it contains only digits, false otherwise.
// Day 14: Write a function that takes an array of numbers and returns the second smallest number.
// Day 15: Write a function that takes a sentence and returns the longest word in the sentence.
// Day 16: Write a function that takes a string and returns the number of times a specific character appears in the string.
// Day 17: Write a function that takes an array of numbers and returns the product of all the numbers.
// Day 18: Write a function that takes a number and returns true if it is a prime number, false otherwise.
// Day 19: Write a function that takes an array of strings and returns a new array with the strings sorted in alphabetical order.
// Day 20: Write a function that takes a string and returns the most frequent character in the string.
// Day 21: Write a function that takes two arrays and returns a new array that contains the elements present in both arrays, without duplicates.
// Day 22: Write a function that takes a string and returns a new string with the words in reverse order.
// Day 23: Write a function that takes an array of numbers and returns the median of the numbers.
// Day 24: Write a function that takes a string and returns the number of uppercase letters in the string.
// Day 25: Write a function that takes a number and returns the sum of its digits.
// Day 26: Write a function that takes an array of numbers and returns the largest difference between any two numbers.
// Day 27: Write a function that takes a sentence and returns the number of unique words in the sentence.
// Day 28: Write a function that takes an array of strings and returns the shortest string in the array.
// Day 29: Write a function that takes a string and returns a new string with the words capitalized.
// Day 30: Write a function that takes a number and returns true if it is a perfect square, false otherwise.
