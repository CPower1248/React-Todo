import React from "react"
import "./Todo.css"

class Todo extends React.Component {
    handleClick = () => {
        console.log(this.props.details.id)
        this.props.handleToggle(this.props.details.id)
    }

    render() {
        return (
            <div onClick={this.handleClick} className={`task${this.props.details.completed ? ' completed' : ''}`}>
                <p>{this.props.details.task}</p>
            </div>
        )
    }
}

export default Todo
