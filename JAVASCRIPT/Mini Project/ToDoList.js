let input = prompt("what would you like to do?");
const todos = [];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("***********");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i} : ${todos[i]}`);
    }
    console.log("***********");
  } else if (input === "new") {
    const newTodo = prompt("ok? what is new ToDo?");
    todos.push(newTodo);
    console.log(`${newTodo} is added to the list!`);
  } else if (input === "delete") {
    const index = prompt("enter the index to delete?");
    const temp = todos.splice(index, 1);
    console.log(`${temp} is deleted`);
  }
  input = prompt("what would you like to do?");
}
console.log("OK QUIT THE APP!");
