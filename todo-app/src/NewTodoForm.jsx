import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function NewTodoForm({ addTodo }) {

    const [task, setTask] = useState("");

    const gatherInput = (e) => {
        e.preventDefault();
        addTodo({ task, id: uuid() });
        setTask("");
    }

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    return (
        <div>
            <form onSubmit={gatherInput}>
                <label htmlFor="todo">To-Do</label>
                <input 
                    name="todo" 
                    id="todo"
                    onChange={handleChange}
                    value={task}
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default NewTodoForm;