// // // assignment no 1(to print hello world)

// // //alert("hello world");

// // // assignment no 2(to set the value of pi)

// const a = Number(prompt("enter the value of pi"));
// if (a === 22 / 7 || a === 3.14) {
//   // i have to ask that am i able to use three or in condition
//   alert(`the value of pi is ${a}`);
// } else {
//   alert("enter the valid data");
// }

// // // assignment no 3(to add 2 numbers if their values are same and tripple it )

// // const a = Number(prompt("enter the first number "));
// // const b = Number(prompt("entrt the second number"));
// // const c = a + b;
// // if (a === b) {
// //   const d = (a + b) * 3;
// //   alert(`the triple of sum of two same number is ${d}`);
// // } else {
// //   alert("the two numbers are not same so it cant be processed ");
// // }

// // Assignment no 4 ( to check the numbe if it is multiple of 3 or 7)

// const a = Number(prompt("enter the number you wanna check"));

// if (a >= 0) {
//   switch (true) {
//     case a % 3 === 0 && a % 7 === 0:
//       alert(" the given number is divided by both 3 and 7");
//       break;

//     case a % 3 === 0:
//       alert(" the given number is divided by only 3");
//       break;

//     case a % 7 === 0:
//       alert("the number is divided by only 7");
//       break;

//     default:
//       alert("the number is not divided by both 3 and 7");
//   }
// } else {
//   alert("enter positive no");
// }

// Assignment 5 (to convert celsius into ferahanite and reverse)

const a = prompt("fe for fehrenheit into celsius and cs for reverse");

switch (true) {
  case a === "fe":
    const b = Number(prompt("enter the temperature in fehrenheit "));
    const c = ((b - 32) / 9) * 5;
    alert(` the ${b} degree fehrenheit is ${c} degree celsius`);
    break;
  case a === "cs":
    const e = Number(prompt("enter the temperature in celsius"));
    const d = (e / 5) * 9 + 32;
    alert(`the ${e} degree is ${d} fehrenheit`);
    break;
  default:
    alert("enter the valid entry");
}
