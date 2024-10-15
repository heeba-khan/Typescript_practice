//* 5. Implement a Basic Todo List
// Define an interface for a Todo item with the following properties:
function addTodo(todos, task) {
    var newTodo = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        task: task,
        completed: false
    };
    todos.push(newTodo);
    return todos;
}
var todos = [];
var updatedTodo = addTodo(todos, "Add Feature");
console.log(updatedTodo);
