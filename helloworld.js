// // assignment no 1(to print hello world)

// //alert("hello world");

// // assignment no 2(to set the value of pi)

// // const a = prompt("enter the value of pi");
// // alert(`the value of pi is ${a}`);

// // assignment no 3(to add 2 numbers if their values are same and tripple it )

// const a = Number(prompt("enter the first number "));
// const b = Number(prompt("entrt the second number"));
// const c = a + b;
// if (a === b) {
//   const d = (a + b) * 3;
//   alert(`the triple of sum of two same number is ${d}`);
// } else {
//   alert("the two numbers are not same so it cant be processed ");
// }

// Assignment no 4 ( to check the numbe if it is multiple of 3 or 7)

const a = Number(prompt("enter the number you wanna check"));
switch (
  a >= 0 // why if i enter negative numbers it shows first number
) {
  case a % 3 === 0 && a % 7 === 0:
    alert(" the given number is divided by both 3 and 7");
    break;

  case a % 3 === 0:
    alert(" the given number is divided by only 3");
    break;

  case a % 7 === 0:
    alert("the number is divided by only 7");
    break;

  default:
    alert("the number is not divided by both 3 and 7");
}
