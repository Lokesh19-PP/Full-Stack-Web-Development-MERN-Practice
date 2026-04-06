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
