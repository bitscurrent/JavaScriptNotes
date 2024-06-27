{
  let a = "apple";
  console.log(a);
}

if (true) console.log("haha"); // valid statement

// // Block scope and block memory
// {
//   let a = 10;
//   const b = 20;
//   var c = 30;
//   console.log(a); // 10
//   console.log(b); // 20
//   console.log(c); // 30
// }
// console.log(c); // 30
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined

// // Shadowing
// let x = 1;
// {
//     let x = 2; // Shadows the outer x
//     console.log(x); // 2
// }
// console.log(x); // 1

// var y = 1;
// {
//   var y = 2; // Shadows the outer y
//   console.log(y); // 2
// }
// console.log(y); // 2

// const z = 11;
// {
//   const z = 12; // Shadows the outer x
//   console.log(z); // 12
// }
// console.log(z); // 11

// //illegal shadowing
// let z = 1;
// {
//   var z = 2; // SyntaxError: Identifier 'z' has already been declared
// }

// Variable accessibility
{
  var m = 100;
}
console.log(m); // 100

{
  let n = 200;
}
console.log(n); // ReferenceError: n is not defined

{
  const o = 300;
}
console.log(o); // ReferenceError: o is not defined
