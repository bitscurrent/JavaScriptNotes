const bucket = [
  //   "rice",
  "egg",
  "shrimps",
  "veggies",
  "salt",
  "msg",
  "soyasauce",
];

const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("veggies") &&
    bucket.includes("rice") &&
    bucket.includes("salt")
  ) {
    resolve("Fried Rice");
  } else {
    reject("Sorry Coulnt fullfill my promise");
  }
});

// consume
// Method1
// friedRicePromise.then(
//   (done) => {
//     console.log("Lets eat", done);
//   },
//   (error) => {
//     console.log("Not done", error);
//   }
// );

//Method2

friedRicePromise
  .then((friedrice) => {
    console.log("Done", friedrice);
  })
  .catch((error) => {
    console.log("Sorry Buddy Next time pakka", error);
  });
