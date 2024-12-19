let word = "racecar";
let array = [];

for (i = 0; i < word.length; i++) {
  array.push(word[i]);
}

const reversedArray = array.reverse();
const joinArray = reversedArray.join("");

if (joinArray === word) {
  console.log("is a palindrome");
} else {
  console.log("is not a palindrome");
}
