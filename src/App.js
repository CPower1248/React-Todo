import React from 'react';
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

const todo = [
  {
    task: "Style my Todo List",
    id: Math.round(Math.random() * 10000),
    completed: false
  },
  {
    task: "Finish project",
    id: Math.round(Math.random() * 10000),
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todo
    }
  }

  handleAdd = newTodo => {
    this.setState({todo: [...this.state.todo, {task: newTodo, id: Math.round(Math.random() * 10000), completed: false}]})
  }

  handleToggle = itemId => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (itemId === item.id) {
          return ({
            ...item,
            completed: !item.completed
          })
        } else {
          return (item)
        }
      })
    })
  }

  handleClear = () => {
    this.setState({todo: this.state.todo.filter(item => (!item.completed))})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList handleToggle={this.handleToggle} todo={this.state.todo} />
        <TodoForm handleClear={this.handleClear} handleAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
