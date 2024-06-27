const username = {
  firstName: "Rajni",
  lastName: "Kanth",

  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
    // Here, the 'this' keyword points to the 'username' object.
  },
};

const username2 = {
  firstName: "Arya",
  lastName: "Bhatta",
};

// Function borrowing
// 'call' allows us to specify the context for 'this'.
username.printFullName.call(username2); // Arya Bhatta

const user = {
  firstName: "Shaktiman",
  lastName: "Gangadhar",
};

const printFullName = function (hometown, nationality) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + nationality
  );
};

printFullName.call(user, "Mumbai", "Indian"); // Shaktiman Gangadhar Mumbai Indian

// Apply method
// Both 'call' and 'apply' methods do the same thing; the only difference is how arguments are passed.
// In 'call', arguments are passed as individual values separated by commas.
// In 'apply', arguments are passed as an array.
printFullName.apply(user, ["Mumbai", "Indian"]); // Shaktiman Gangadhar Mumbai Indian

// Bind method
// The 'bind' method returns a new function with a specified context and initial arguments.
// When using 'bind', the arguments passed after the context should be individual values, not an array.
const details = printFullName.bind(user, "Mumbai", "Indian");
console.log(details); // [Function: bound printFullName]
details(); // Shaktiman Gangadhar Mumbai Indian
