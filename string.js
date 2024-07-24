// // to count vowels
// const phrase = String(prompt("enter the phrase you want to count for vowels"));
// let count = 0;
// let len = phrase.length;
// for (let j = 0; j <= len - 1; j++) {
//   if (
//     phrase[j] === "a" ||
//     phrase === "e" ||
//     phrase === "i" ||
//     phrase === "o" ||
//     phrase === "u"
//   ) {
//     count++;
//   }
// }
// console.log({ count });

// to check prime or not by using function

// const check = (num) => {
//   if (num <= 1) {
//     return `${num} is not a prime number`;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return `${num} is not prime no`;
//     }
//   }
//   return `${num} is  prime no`;
// };

// const number = Number(prompt("enter the number you wanna check"));
// console.log(check(number));

//to count certain charactr in string

const countchar = (word, char) => {
  let count = 0;
  console.log(`${word.length}`);

  const array = word.split("");
  console.log(`${array}`);

  for (let i = 0; i < word.length; i++) {
    if (array[i] === char) {
      count = count + 1;
    }
  }
  return count;
};

const enteredstring = String(prompt("enter the word "));
const chartocount = String(prompt("enter the character you wanna count "));
console.log(
  `${countchar(enteredstring.toLowerCase(), chartocount.toLowerCase())}`
);
