import React from "react";

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value )
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText("")
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"></input>
            <button onClick={submitTodoHandler} type="submit" className="todo-button">
            <i className="fas fa-plus-square"></i>
            </button>
            <div>
                <select onChange={statusHandler} name="todos" className="filter-todo select">
                    <option value="" selected disabled hidden> Filtra </option>
                    <option value="all"> Tutti </option>
                    <option value="completed"> Completati </option>
                    <option value="uncompleted"> Da fare </option>                
                </select>
                

            </div>
        </form>
    )
}

export default Form