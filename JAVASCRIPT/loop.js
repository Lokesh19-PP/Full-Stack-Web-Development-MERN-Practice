for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i < 6; i++) {
  console.log("Da ba dee da ba daa");
}

for (let i = 25; i >= 0; i -= 5) {
  console.log(i);
}

const no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (let i = 0; i < no.length; i++) {
  console.log(no[i]);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}

for (let i = 0; i < 10; i++) {
  console.log("outer : " + i);
  for (let j = 0; j < 10; j++) {
    console.log("inner : " + j);
  }
}

let num = 0;
while (num < 11) {
  console.log(num);
  num++;
}

const secret = "baby";

let guess = prompt("enter the secrete code .....");
while (guess !== secret) {
  guess = prompt("enter the secrete code .....");
}
console.log("Congrats...");
