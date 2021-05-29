import React, { Component } from 'react'

export default class TaskList extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: 'walk the dog',
        completed: false,
      },
      {
        id: 2,
        title: 'watch react js course',
        completed: true,
      },
      {
        id: 3,
        title: 'watch movie with friends',
        completed: false,
      },
    ],
  }

  render() {
    let { tasks } = this.state

    const toggleTask = (id) => {
      let newTasks = tasks.map((task) => {
        // if (task.id === id) {
        //   return {
        //     ...task,
        //     completed: !task.completed,
        //   }
        // }
        // return task

        return task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      })
      this.setState({ tasks: newTasks })
    }

    // -------------------------------
    return (
      <div>
        <h1>Task List</h1>

        <div className='list-group'>
          {tasks.map(({ id, title, completed }) => {
            return (
              <button
                key={id}
                onClick={() => toggleTask(id)}
                className='list-group-item-action 
                list-group-item 
                d-flex 
                justify-content-between 
                align-items-start'
              >
                <div className='fw-bold'>{title}</div>
                <span
                  className={completed ? 'badge bg-success' : 'badge bg-danger'}
                >
                  {completed ? 'done !' : 'not yet'}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    )
  }
}
