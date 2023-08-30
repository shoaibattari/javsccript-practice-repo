//task#1 write code
// [1,2,3,4,5]
// result [[1,2],[2,3],[3,4],[4,5],[5]]

// let inputArray = [1, 2, 3, 4, 5];
// let resultArray = [];

// for (let i = 0; i < inputArray.length; i++) {
//   if (i !== inputArray.length) {
//     const subArray = [inputArray[i], inputArray[i + 1]];
//     resultArray.push(subArray);
//   }
// }

// console.log(resultArray);

// task#2 write code
//  print even number 1 to 100
// for (let i = 2; i <= 100; i += 2) {
//   console.log(" even number " + i);
// }

// task#3
// ["saleem", 25, "sattar" , 26 ,"usiad" , 27 ]
// result 1[{name:Saleem , age: 25}, {name:sattar, age:26}, {name:usaid, age:27}]

// const inputArray = ["saleem", 25, "sattar", 26, "usaid", 27];
// const resultArray = [];

// for (let i = 0; i < inputArray.length; i += 2) {
//   const name = inputArray[i];
//   const age = inputArray[i + 1];

//   if (typeof name === "string" && typeof age === "number") {
//     const person = { name: "", age: 0 };
//     person.name = name.charAt(0).toUpperCase() + name.slice(1);
//     person.age = age;
//     resultArray.push(person);
//   }
// }
