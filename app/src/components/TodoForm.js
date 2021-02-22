import React, {useState, useRef, useEffect} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    // Let cursor automatically focus on an input
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a Todo"
                value={input}
                name="text"
                className="todo-input"
                onChange={handleChange}
                ref={inputRef}
                autocomplete="off"
            >
            </input>
            <button className="todo-btn">Add Todo</button>
        </form>
    )
}

export default TodoForm