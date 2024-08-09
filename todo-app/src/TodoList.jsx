import NewTodoForm from "./NewTodoForm.jsx";
import Todo from "./Todo.jsx";
import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);

    // add a new todo
    const addTodo = newTodo => {
        setTodos(todos => [...todos, newTodo]);
    }

    // update a todo with updatedTask
    const updateTodo = (id, updatedTask) => {
        setTodos(todos => 
            todos.map(todo => 
                todo.id === id ? {...todo, task: updatedTask} : todo
            )
        );
    };

    // delete a todo by id
    const deleteTodo = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    // create array of todos
    const todoComponents = todos.map(todo => (
        <Todo 
            remove={ deleteTodo }
            key={ todo.id }
            id={ todo.id }
            update={ updateTodo }
            task={ todo.task }
        />
    ));

    return (
        <div>
            <NewTodoForm addTodo={addTodo}/>
            <ul>{ todoComponents }</ul>
        </div>
    );
}

export default TodoList;