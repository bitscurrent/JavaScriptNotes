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

### LocalStorage vs SessionStorage

Both local storage and session storage can store an object in the browser. However, when a tab or browser is closed, the data stored in session storage is erased, while data in local storage remains until it is removed. Local storage is a property of the window object in the browser, and data can be stored by inserting a key-value pair as follows: 
  ```javascript
  localStorage.setItem(key, value)
  ```
_Fetching data by making network requests and processing it takes time, so developers prefer to store it in local storage and retrieve it when needed._

# Frontend
Front-end web development involves creating the graphical user interface of a website using HTML, CSS, and JavaScript, enabling user interaction. This includes designing layouts, styling content, and adding interactive features. It often involves frameworks like React, Angular, and Vue.js, as well as tools like Sass for CSS and Webpack for bundling. Front-end developers ensure websites are responsive and accessible across various devices and browsers.
