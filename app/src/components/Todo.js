import React, {useState} from 'react'
import TodoForm from './TodoForm'


function Todo({todos, updateTodo, removeTodo, completeTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
            <div className="todo-description" key={todo.id}>{todo.text}</div>
            <div className="icons">
                <i className="fas fa-trash" onClick={() => removeTodo(todo.id)}></i>
                <i className="fas fa-edit" onClick={() => setEdit({id: todo.id, value: todo.text})}></i>
                <i className="fas fa-check-circle" onClick={() => completeTodo(todo.id)}></i>
            </div>
        </div>
    ))
}

export default Todo
