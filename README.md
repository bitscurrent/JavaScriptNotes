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
### High Order Function
A function which takes either one or more functions as an argument or returns function as it returns.

#### map, filter and reduce 
map, filter, and reduce are array methods (built-in higher-order functions). The map function takes a function as an argument and applies it to each element in the array. The filter method also takes a function as an argument and filters out elements according to the logic provided in the function. The reduce method, on the other hand, takes two arguments inside its callback function: the accumulator and the current element.

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
