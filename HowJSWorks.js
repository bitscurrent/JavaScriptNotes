console.log(firstName);
console.log(apple);
console.log(apple());

var firstName = "Tom Cruse";

function apple() {
  console.log("An apple a day makes you shit");
}

// Additional Notes-
// First, JavaScript code is compiled in three steps.
// But why is JavaScript code compiled?
// Answer: Well, due to the following two reasons-
// a) Firstly, for early error checking, which is necessary because it helps to identify any errors in the code before execution.
// b) Secondly, to determine the appropriate scope for variables, ensuring that they are accessible in the correct context and preventing potential issues related to variable scoping.

// Now, as discussed above, compilation is done in three steps:
// 1. **Tokenizing (Lexical Analysis)** - This step breaks the code into simple chunks called tokens.
// 2. **Parsing** - In this step, the compiler takes the tokens generated in the tokenizing step and creates an Abstract Syntax Tree (AST) after understanding those tokens. It also decides the scope of variables.
// 3. **Code Generation** - This final step involves converting the Abstract Syntax Tree (AST) into executable code. This is the step where the machine code or bytecode is generated, which can then be run by the JavaScript engine.
