import React from "react"
import Todo from "./Todo"

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {
    render() {
        console.log(this.props.todo)
        return (
            <div>
                <h3>Todo List</h3>
                {this.props.todo.map(item => {
                    return <Todo key={item.id} handleToggle={this.props.handleToggle} details={item} />
                })}
            </div>
        )
    }
}

export default TodoList
