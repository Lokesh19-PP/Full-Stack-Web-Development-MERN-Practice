//function scope
let eggs = 5;
function egg() {
  let eggs = 6;
  console.log(eggs);
}
console.log(eggs);

let bird = "sparrow";
function name() {
  console.log(bird);
}

//Lexical Scope
function bank() {
  const hero = ["spiderman", "superman", "batman"];
  function cryforhelp() {
    for (let h of hero) {
      console.log(h);
    }
  }
  cryforhelp();
}
bank();

//function Expression
const square = function (x) {
  return x * x;
};
square(4);

//Higher Order Function
function callTwice(func) {
  func();
  func();
}
function RollDie() {
  console.log(Math.floor(Math.random() * 6) + 1);
}
callTwice(RollDie);

//Returning Function
function make() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("Congrats");
    };
  } else {
    return function () {
      alert("Computer Virus");
    };
  }
}
let temp = make();
temp();
