import React from 'react';
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

const toDo = [
  {
    task: "Style my ToDo List",
    id: 18,
    complete: false
  },
  {
    task: "Check .map functionality",
    id: 24,
    complete: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDo: toDo
    }
  }

  handleToggleItem = itemId => {
    this.setState({
      toDo: this.state.toDo.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  handleAddItem = name => {
    this.setState({
      toDo: [...this.state.toDo, {
        task: name,
        id: this.state.toDo.length,
        completed: false
      }]
    })
  }

  clearItems = () => {
    this.setState({
      toDo: this.state.toDo.filter(item => (!item.completed))
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList handleClearItems={this.clearItems} handleToggleItem={this.handleToggleItem} toDo={this.state.toDo} />
        <TodoForm handleAddItem={this.handleAddItem} />
      </div>
    );
  }
}

export default App;
