const marks = {
  lokesh: 90,
  yash: 95,
  ayushi: 80,
  manish: 60,
  piyush: 30,
  shekhar: 50,
  om: 90,
};

for (let person in marks) {
  console.log(`${person} scores ${marks[person]}`);
}

let total = 0;
for (let i of Object.values(marks)) {
  total += i;
}
console.log(total);
