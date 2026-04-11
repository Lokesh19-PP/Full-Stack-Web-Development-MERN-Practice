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
