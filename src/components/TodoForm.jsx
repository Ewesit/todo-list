import React, { useState } from "react"

const TodoForm = () => {
    const [value, setValue] = useState(" ");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(value)
    }

    return(
        <form className="mb-4 font-primary w-full" onSubmit={handleSubmit}>
            <input type="text" className="outline-none bg-transparent border border-gray-500 p-4 w-[300px]
             text-white mb-8 rounded placeholder:text-gray-400" 
            placeholder='What is the task today?' onChange=
            {(e) => setValue(e.target.value)}/>
            <button type="submit" className="bg-gray-700 border-none p-2 text-white cursor-pointer ml-2">Add task</button>
        </form>
    )
}

export { TodoForm }; 
