import React, {useState} from "react";
import {TodoForm} from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }
    return(
        <div className="TodoWrapper container bg-blue-950 mt-20 p-8 rounded-md flex flex-col items-center">
            <h1 className="text-4xl text-white font-bold">My TODO List</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <Todo task={todo} key={index} />
            ))}
        </div>

    );
}

export default TodoWrapper; 

