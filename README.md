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
