// // // // // const t = Number(prompt("enter the number you want a table of"));
// // // // // for (let i = 1; i <= 10; i++) {
// // // // //   let j = t * i;
// // // // //   console.log(`${t}*${i}=${j}`);
// // // // // }

// // // // // do while

// // // // const t = Number(prompt("enter the number you want a table of"));
// // // // let i = 1;
// // // // if (isNaN(t)) {
// // // //   alert("please enter the number");
// // // // } else {
// // // //   do {
// // // //     let j = t * i;
// // // //     console.log(`${t}*${i}=${j}`);
// // // //     i++;
// // // //   } while (i <= 10);
// // // // }

// // // //while loop
// // // const t = Number(prompt("enter the number you want a table of"));
// // // let i = 1;
// // // if (isNaN(t)) {
// // //   alert("Please enter a number");
// // // } else {
// // //   while (i <= 10) {
// // //     let j = t * i;
// // //     console.log(`${t}*${i}=${j}`);
// // //     i++;
// // //   }
// // // }

// // //function (wap to convert temperatures)ES5
// // function temptoC(a) {
// //   const k = ((a - 32) / 9) * 5;
// //   return k;
// // }
// // function temptoF(b) {
// //   const l = (b / 5) * 9 + 32;
// //   return l;
// // }
// // const p = prompt("enter c to convert ferahanite to celsius and f for reverse");
// // switch (true) {
// //   case p === "c":
// //     const a = Number(prompt("enter the temp in ferahanite "));
// //     alert(`the ${a} degree ferahanite is ${temptoC(a)} degree celsius`);
// //     break;
// //   case p === "f":
// //     const b = Number(prompt("enter the temp in celsius "));
// //     alert(`the ${b} degree celsius is ${temptoF(b)} degree ferahanite`);
// //     break;
// //   default:
// //     alert("please enter the valid input");
// // }

// // function (wap to convert temperatures) ES6

const temptoC /*function name*/ = (a) => {
  const k = ((a - 32) / 9) * 5;
  return k;
};

const temptoF /*function name*/ = (b) => {
  const l = (b / 5) * 9 + 32;
  return l;
};

const p = prompt("enter c to convert ferahanite to celsius and f for reverse");
switch (true) {
  case p === "c":
    const x = Number(prompt("enter the temp in ferahanite "));
    alert(`the ${x} degree ferahanite is ${temptoC(x)} degree celsius`);
    break;
  case p === "f":
    const y = Number(prompt("enter the temp in celsius "));
    alert(`the ${y} degree celsius is ${temptoF(y)} degree ferahanite`);
    break;
  default:
    alert("please enter the valid input");
}
