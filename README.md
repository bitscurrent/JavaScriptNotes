# JavaScriptNotes


![Execution Context](https://github.com/bitscurrent/JavaScriptNotes/assets/150729849/f52ea4b1-7975-43c8-b5aa-07b030a8d250)


### Undefined vs Not Defined in JavaScript

- **Undefined**: A variable is `undefined` if it has been declared but not assigned a value.
  ```javascript
  var x;
  console.log(x); // Output: undefined
  ```
- **Not Defined**: A variable is `not defined` if it has not been declared at all, resulting in a ReferenceError when accessed.
  ```javascript
  console.log(z); //ReferenceError: z is not defined
  ```
### Let and Const in Temporial dead zone
Variables declared with `var`, `let`, and `const` are _hoisted_, meaning their declarations are moved to the top of their containing scope during the compilation phase. However, there are important differences in how they are initialized:

_var_: Variables are initialized with undefined and are stored in the global object (window in the case of browsers), allowing them to be used before their declaration.  Variables declared with var are hoisted and initialized with undefined. This means it can be used before its declaration without causing an error, although it will have the value undefined until the actual declaration is encountered.
  ```javascript
  console.log(a); // undefined
  var a = 10;
  console.log(a); // 10
  ```
_let and const_: Variables declared with let and const are also hoisted but are not initialized and are stored in a different storage, which is not the global object. They are in a "temporal dead zone" (TDZ) from the start of the block until the declaration is encountered. If we try to access them before their declaration, it will result in a ReferenceError.
  ```javascript
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  // infact b is in temporial deadzone here(TDZ)
  let b = 20;
  console.log(b); // 20
  ```
##### Difference between const and let
  ```javascript
  let b;
  b = 20;
  console.log(b); // 20
  //valid syntax
  ```
SyntaxError
  ```javascript
  const x; // SyntaxError: Missing initializer in const declaration
  x = 10; // This line won't be reached
  ```
TypeError
  ```javascript
  const y = 20;
  y = 30; // TypeError: Assignment to constant variable.
  console.log(y); // invalid syntax
  ```

#### Temporal Dead Zone (TDZ)
The temporal dead zone refers to the time between entering the scope (e.g., a block or function) and the actual declaration and initialization of let and const variables. During this period, any attempt to access these variables will throw a ReferenceError. The TDZ exists to ensure that variables are not accessed before they are properly initialized, enhancing the reliability and predictability of the code.

### Block scope and shadowing
_Block Scope_: Code inside curly braces {} is called a block. Multiple statements are grouped inside a block to be executed as a single unit, such as in if, else, loops, etc. Variables declared with let and const are block-scoped, meaning they are only accessible within the block they are declared in, unlike var which is function-scoped or globally-scoped.

_Block Memory_: Variables declared with let and const are stored in a separate memory space within the block, not in the global or function scope. This is why let and const are called block-scoped variables.
  ```javascript
  {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
  }

  console.log(c); // 30
  console.log(a); // ReferenceError: a is not defined
  console.log(b); // ReferenceError: b is not defined
  ```
_Shadowing_: Shadowing occurs when a variable declared within a certain scope (block) has the same name as a variable in an outer scope. The inner variable shadows the outer variable within its scope.
  ```javascript
  let x = 1;
  {
    let x = 2; // Shadows the outer x
    console.log(x); // 2
  }
  console.log(x); // 1
  
  var y = 1;
  {
    var y = 2; // Shadows the outer y
    console.log(y); // 2
  }
  console.log(y); // 2
  ```

_Illegal Shadowing_: Shadowing a variable declared with let or const using var is illegal and results in an error. However, shadowing a var variable with let or const within a block is allowed.

  ```javascript
  let z = 1;
  {
    var z = 2; // SyntaxError: Identifier 'z' has already been declared
  }
  ```
_Scope of Shadow_: The shadowing variable must remain within its block scope. If it tries to cross the scope boundary, it will result in an error.

_Variable Accessibility_: Variables declared with var are stored in the nearest outer function or global scope, making them accessible outside the block. In contrast, variables declared with let and const are only accessible within the block they are declared in. 

  ```javascript
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
  ```
### High Order Function
A function which takes either one or more functions as an argument or returns function as it returns.

#### map, filter and reduce 
map, filter, and reduce are array methods (built-in higher-order functions). The map function takes a function as an argument and applies it to each element in the array. The filter method also takes a function as an argument and filters out elements according to the logic provided in the function. The reduce method, on the other hand, takes two arguments inside its callback function: the accumulator and the current element.

### Call, Apply and Bind methods
The call, apply, and bind methods are used to explicitly set the context (this) for a function.

call: Invokes a function with a specified this context and individual arguments.
apply: Similar to call, but arguments are passed as an array.
bind: Returns a new function with a specified this context and initial arguments, which can be called later.
  ```javascript
  Example:
  call: func.call(context, arg1, arg2)
  apply: func.apply(context, [arg1, arg2])
  bind: const newFunc = func.bind(context, arg1, arg2); newFunc()
  ```
_These methods allow for flexible function borrowing and ensure proper context handling in various scenarios._

### setTimeout in JS

The setTimeout function with a 0-millisecond delay does not execute the function immediately _see example below_ but instead places it in the event queue to be processed after the current call stack is clear. This is because JavaScript operates with a single-threaded event loop that handles asynchronous events. As a result, the synchronous code runs to completion before the event loop processes any queued asynchronous functions. In the code provided:
  ```javascript
  console.log("1");
  setTimeout(function () {
  console.log("Hell");
  }, 0);
  console.log("2");
  ```
#### in depth analysis-
console.log("1"); and console.log("2"); execute first, printing 1 and 2 respectively. 
The setTimeout callback, despite having a 0-millisecond delay, is processed only after the synchronous code has completed, resulting in `Hell` being printed last. This behavior occurs because the event loop only picks up the setTimeout callback after the call stack is empty. 

### Promises in JS
In JavaScript, promises have three states: pending, fulfilled, and rejected. A promise represents an asynchronous task, allowing the code to continue executing while the task completes. JavaScript features XMLHttpRequest for handling such tasks, but modern development often uses the async and await keywords for more readable and manageable asynchronous code. Promises are commonly used for tasks like downloading data from the internet, opening a file on the computer, and other operations that take time to complete.

### LocalStorage vs SessionStorage
![Screenshot (64)](https://github.com/bitscurrent/JavaScriptNotes/assets/150729849/637b3033-1b61-4593-8d41-cb48e79bf093)

Both local storage and session storage can store an object in the browser. However, when a tab or browser is closed, the data stored in session storage is erased, while data in local storage remains until it is removed. Local storage is a property of the window object in the browser, and data can be stored by inserting a key-value pair as follows: 
  ```javascript
  localStorage.setItem(key, value)
  ```
_Fetching data by making network requests and processing it takes time, so developers prefer to store it in local storage and retrieve it when needed._

# HTTP vs HTTPS
Hypertext Transfer Protocol (HTTP) is a set of rules for communication between web browsers and servers. When a website is visited, the browser sends an HTTP request, and the server responds with the web page. HTTP communicates in plain text, making it easier for people to sniff. However, HTTPS (Hypertext Transfer Protocol Secure) adds a layer of security by encrypting the data exchanged, ensuring privacy and protection from eavesdroppers. The "S" in HTTPS stands for "Secure."

# Frontend
Front-end web development involves creating the graphical user interface of a website using HTML, CSS, and JavaScript, enabling user interaction. This includes designing layouts, styling content, and adding interactive features. It often involves frameworks like React, Angular, and Vue.js, as well as tools like Sass for CSS and Webpack for bundling. Front-end developers ensure websites are responsive and accessible across various devices and browsers.
