import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo } from "../features/todo/todoSlice";

export default function Todo()
{
    const todos = useSelector((state)=> state.todos);
    console.log(todos);

    const dispatch = useDispatch();

    function deleteHandler(id){
dispatch(deleteTodo(id))    }
    return(
        <>
        <AddForm></AddForm>
        <h3>todo List</h3>
        <ul>
                {todos.map((todo) => (<li key={todo.id}>{todo.task}
                    <button onClick={() => { deleteHandler(todo.id) }}>Delete</button></li>)
                
            )}
        </ul>
        </>
    );
}