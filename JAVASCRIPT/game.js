let maximum = parseInt(prompt("enter the maximum no. :"));
while (!maximum) {
  maximum = parseInt(prompt("enter the maximum no. :"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);
let guess = prompt("enter your first guess : ");
let atempt = 1;
while (guess !== targetNum) {
  atempt++;
  if (guess > targetNum) {
    guess = prompt("too high! enter a new no. : ");
  } else {
    guess = prompt("too low! enter a new no. :");
  }
}
console.log("You got it! atempt : " + atempt);
