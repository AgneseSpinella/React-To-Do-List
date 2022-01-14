import React from "react";

const Form = ({setInputText, todos, setTodos}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value )
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputTextHandler, completed: false, }
        ])
    }
    return (
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input"></input>
            <button onClick={submitTodoHandler} type="submit" className="todo-button">
            <i className="fas fa-plus-square"></i>
            </button>
            <div>
                <select name="todos" className="filter-todo">
                    <option value="all"> Tutti </option>
                    <option value="completed"> Completati </option>
                    <option value="uncompleted"> Da fare </option>
                </select>
            </div>
        </form>
    )
}

export default Form