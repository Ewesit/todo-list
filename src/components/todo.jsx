import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({task}) => {
    return(
        <div className="todo flex items-center text-white">
            <p>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} className="mr-2" />
                <FontAwesomeIcon icon={faTrash} />
                
            </div>
        </div>
    )
}

export default Todo;