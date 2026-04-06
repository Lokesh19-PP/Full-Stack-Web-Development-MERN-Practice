function display() {
  console.log("hello it is my first function");
}
display();
display();
display();

function sum(no1, no2) {
  console.log(`addition is ${no1 + no2}`);
}
sum(10, 20);

function name_dis(firstName, lastName) {
  console.log(`first name : ${firstName}`);
  console.log(`last name : ${lastName}`);
}
name_dis("Lokesh", "Pawar");

function rant(message) {
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
}
rant("I hate beets");

function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  return x + y;
}
console.log(`Sum of ${10} and ${20} is ${add(10, 20)}`);

function multiply(x, y) {
  return x * y;
}
console.log(multiply(10, 30));
