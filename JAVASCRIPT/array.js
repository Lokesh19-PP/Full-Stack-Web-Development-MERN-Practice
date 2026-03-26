let student = ["lokesh", "ayushi", "manish", "ganesh"];
console.log(student[0]);
console.log(student[1]);
console.log(student[2]);
console.log(student[3]);

student[3] = "tanmay";

console.log(student);

// arrya methods

console.log(student.length);

student.push("riya");
console.log(student);

student.pop();
console.log(student);

student.reverse();
console.log(student);

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = arr1.concat(arr2);
console.log(arr3);

console.log(arr3.includes(5));
console.log(arr3.includes(11));

console.log(arr3.indexOf(7));

let colors = [
  "red",
  "yellow",
  "blue",
  "violet",
  "black",
  "white",
  "grey",
  "pink",
];
console.log(colors.slice(5));
console.log(colors.slice(3, 5));
console.log(colors.slice(-3));

console.log(colors.splice(5, 1));
console.log(colors);
