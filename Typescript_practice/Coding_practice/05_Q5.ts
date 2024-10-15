//* 5. Implement a Basic Todo List
// Define an interface for a Todo item with the following properties:

// id: number
// task: string
// completed: boolean
// Then, create a function that adds a new Todo to an array of Todos and returns the updated array.


interface todo{
    id:number,
    task:string,
    completed:boolean
}

function addTodo(todos:todo[],task:string):todo[]{
    const newTodo:todo={
        id: todos.length>0?todos[todos.length-1].id+1:1,
        task:task,
        completed:false
    }
    todos.push(newTodo)

    return todos
}

const todos:todo[]=[]
const updatedTodo=addTodo(todos,"Add Feature")
console.log(updatedTodo);
