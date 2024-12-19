let word = "racecar";

const reversedWord = word.split("").reverse().join("");

if (reversedWord === word) {
  console.log("is palindrome");
} else {
  console.log("is not a palindrome");
}
