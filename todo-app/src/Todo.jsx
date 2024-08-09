import { useState } from "react";

function Todo({ id = "1", task = "default todo", update, remove }) {
    const [editTask, setEditTask] = useState(task);
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(edit => !edit);
    }

    const handleChange = e => {
        setEditTask(e.target.value);
    }

    const handleRemove = () => remove(id);

    const handleUpdate = e => {
        e.preventDefault();
        update(id, editTask);
        setIsEditing(false);
    }

    // default todo view
    let jsx = (
        <div>
            <li>{ task }</li>
            <button onClick={ toggleEdit }>Edit</button>
            <button onClick={ handleRemove }>X</button>
        </div>
    );

    // change todo view if editing
    if (isEditing) {
        jsx = (
            <div>
                <form onSubmit={ handleUpdate }>
                    <input value={ editTask } onChange={ handleChange }/>
                    <button>Update</button>
                </form>
            </div>
        )
    }
    return jsx;
}

export default Todo;