import React, { useState } from "react"

const TodoForm = ({ addTodo }) => {  // Receive addTodo function as a prop
    const [value, setValue] = useState(" ");

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value); //addTodo and pass in the value. This way we can pass the todoState to the todoWrapper
        // console.log(value)

        // clear form after submiiting
        setValue(" ")
    }

    return(
        <form className="TodoForm mb-4 font-primary w-full" onSubmit={handleSubmit}>
            <input type="text" className="todo-input outline-none bg-transparent border border-gray-500 p-4 w-[300px]
             text-white mb-8 rounded placeholder:text-gray-400" 
            value = {value} placeholder='What is the task today?' onChange=
            {(e) => setValue(e.target.value)}/>
            <button type="submit" className="todo-btn bg-gray-700 border-none p-2 text-white cursor-pointer ml-2">Add task</button>
        </form>
    )
}

export { TodoForm }; 
