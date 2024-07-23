// // // //building block of java scrit
// // // // 2 cor principles  /a DRy= do not repeat yourself /2. Soc (deperation of concern)

// // // // two ways to write function

// // // //ES5
// // // //function declare
// // // //functions

// // // function square(a) {
// // //   const b = a * a;
// // //   return b;
// // //   p;
// // // }
// // // const a = square(prompt("enter the number you want to get square of"));
// // // console.log({ a });

// // // //ES6

// // // syntax for es6
// // //const squares= (x) =>{
// //     return x*x ;}
// const newanswer = square(4);
// // console.log({ newanswer });

/*types of function
1. default function
2.parametrized function
3.arrow function(it is es6 function)
4.closure
5.IIFes
6.recursive function
7.inline function
8.abonymous function
9.callback functi0n
10. pure funtion
11.implicit funtion
12.explicit function
*/

// default function is used for paganation
// parametrized function
// const sum({a,b,c})=>{
//     console.log(a+b+c);
// }
// sum({a:2,b:3,c:5});

// it helps to  fix the values of paramaters without caring about the SVGTextPositioningElement

//arrow function is ES6 function

//4.closure(most important)

// have to call function from function
// have to look at it properly

//IIFes(immediately invoked function extression)
//Devops for
// ()=>{
//     console
// }

//recursive function

// const sum = (n) => {
//   if (x <= 0) {
//     alert("enter the valid data ");
//   } else {
//     let
//     return sum();// have to be clear
//   }
// };
// const x = Number(prompt("enter the number you want to count down of"));
// console.log(`${sum(x)}`);

// inline function
//

//implicit and callback function use

const temptoCelsuis = (tempinF) => ((tempinF - 32) / 9) * 5;
const temptoFahrenheit = (tempinC) => (tempinC / 5) * 9 + 32;
const newfunction = (temp, call) => call(temp);
const unit = prompt(
  "enter 'c' to convert fahrenheit to celsius and 'f' for reverse"
);
switch (unit) {
  case "c":
    const tempinF = Number(prompt("enter the temperature in fahrenheit"));
    alert(`is ${newfunction(tempinF, temptoCelsuis)} degree celsius`);
    break;
  case "f":
    const tempinC = Number(prompt("enter the temperature in celsius"));
    alert(`is ${newfunction(tempinC, temptoFahrenheit)} degree fahrenheit`);
    break;
  default:
    alert("enter the valid data");
}
