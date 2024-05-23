import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo()
{

    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(),isdone: false }]);
   let [NewTodo , setNewTodo] = useState("");

   function addNewTask()
   {
    setTodos([...todos, {task:NewTodo,id:uuidv4(),isdone:false}]);
    setNewTodo("")
}

    function updateTOdoValue(event) {
    setNewTodo(event.target.value);
   }

   function TaskDelete(id)
   {
    setTodos(todos.filter((todo)=> todo.id != id));
   }
   function TaskUpper(id)
   {
    setTodos((todos)=>
    todos.map((todo)=>{
        if(todo.id == id){
            return{
                ...todo,
                task:todo.task.toUpperCase(),
            };
        }else{
            return todo;
        }
    }))
   }

   function TaskDone(id)
   {
    setTodos((todos)=>
    todos.map((todo)=>{
        if(todo.id == id){
            return{
                ...todo,
                isdone:true,
            };
        }else{
            return todo;
        }
    }))
   }
return (
    <div>
        <h1>Add Todo</h1>
        <input type="text" placeholder="Type Task" value={NewTodo} onChange={updateTOdoValue} />
        <button onClick={addNewTask}>Add Task</button>
        <hr />
        <h1>Todo List</h1>
        <ul>
            {
            todos.map((todo)=>(
                    <li key={todo.id}>
                    <span style={todo.isdone ? {textDecoration:"line-through"}:{}}>{todo.task}</span>
                    <button onClick={()=>TaskDelete(todo.id)}>Delete</button>
                    <button onClick={()=>TaskUpper(todo.id)}>Upeper Case</button>
                    <button onClick={()=>TaskDone(todo.id)}>Done</button>
                    </li>
                ))}
        </ul>

    </div>
);
}