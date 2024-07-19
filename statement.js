// // // // statements
// // // // 1 .if else
// // // // 2. switch case

// // // //if else syntax
// // // if (condition){
// // //     print result
// // // }
// // // else(condition)
// // // {
// // //     print result
// // // }

// // //switch case syntax
// // const gender = prompt("click 1 if you are male and 2 if you are female");
// // if (gender == 1

// // ) {
// //   alert("you are male");
// // } else {
// //   alert("you are female");
// // }
// // = variable assign
// // == data type and value assign
// // === data type and value assign + data conversion to bullen

// //2 switch case..

// // syntax

// // switch(condition)
// {
//     case "1";
//     alert("sunday");
//     break;
//     case "2";
//     alert("monday");
//     break;
//     default:
//         alert("you must choose between 1 nad 7");

// }

//Wap to check grade of student  A grade

const per = Number(prompt("enter your percentage"));
switch (true) {
  case per > 80 && per <= 100:
    alert("your grade is A");
    break;
  case per >= 60 && per <= 80:
    alert("your grade is B");
    break;
  default:
    alert("better luck next time");
}
