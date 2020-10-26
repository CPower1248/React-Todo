import React from "react"
import ToDo from "./Todo"

const ToDoList = props => {
    const handleClick = () => {
        props.handleClearItems();
    }

    return (
        <div className="todoList-container">
            {props.toDo.map(item => {
                return <ToDo handleToggleItem={props.handleToggleItem} key={item.id} item={item} />
            })}
            <button onClick={handleClick}>clear completed</button>
        </div>
    )
}

export default ToDoList
