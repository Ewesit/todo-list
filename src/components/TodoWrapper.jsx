import React, {useState} from "react";
import {TodoForm} from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
uuidv4();

export const TodoWrapper = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }
    return(
        <div className="TodoWrapper container bg-blue-950 mt-20 p-8 rounded-md">
            {children}
            <TodoForm addTodo={addTodo} />
            {todos.map(todo => (
                <Todo key={todo.id} />
            ))}
            {/* <Todo /> */}
        </div>
    );
}

export default TodoWrapper; 

