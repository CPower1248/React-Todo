import React from "react"

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

    handleChange = e => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleAdd(this.state.input)
        this.setState({input: ""})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange} type="text" name="task" />
                    <button>Submit</button>
                </form>
                <button onClick={this.props.handleClear}>Clear</button>
            </div>
        )
    }
}

export default TodoForm
