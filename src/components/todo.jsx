import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = () => {
    return(
        <div className="todo flex items-center text-white">
            <p className="mr-4">Go to School</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} className="mr-2" />
                <FontAwesomeIcon icon={faTrash} />
                
            </div>
        </div>
    )
}

export default Todo;