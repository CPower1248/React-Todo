import React from "react"

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: "",
        }
    }

    handleChanges = e => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleAddItem(this.state.input)
    }

    render() {
        return (
            <form className="todoForm-container" onSubmit={this.handleSubmit}>
                <label>Add task:
                    <input onChange={this.handleChanges} value={this.state.input} type="text" name="item" placeholder="new task" />
                </label>
                <button>submit</button>
            </form>
        )
    }
}

export default ToDoForm