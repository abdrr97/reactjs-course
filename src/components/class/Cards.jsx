import React, { Component } from 'react'

export default class Cards extends Component {
  state = {
    data: [
      {
        id: 1,
        title: 'DATA',
        tasks: ['task 1', 'task 2'],
        isActive: true,
      },
      {
        id: 2,
        title: 'DATA',
        tasks: ['task 1', 'task 2', 'task 3'],
        isActive: true,
      },
      {
        id: 3,
        title: 'DATA',
        tasks: ['task 1', 'task 2', 'task 3', 'task 4', 'task 5'],
        isActive: true,
      },
      {
        id: 4,
        title: 'DATA',
        tasks: ['task 1', 'task 2', 'task 3', 'task 4'],
        isActive: true,
      },
      {
        id: 5,
        title: 'DATA',
        tasks: ['task 1'],
        isActive: true,
      },
    ],
  }

  render() {
    let { data } = this.state
    return (
      <div className='row'>
        {data.map(({ id, title, tasks, isActive }) => {
          return (
            <div key={id} className='col-4'>
              <div className='card'>
                <div className='card-header d-flex justify-content-between'>
                  <h6>
                    {title} - {id}
                  </h6>
                  <button
                    onClick={() => {
                      let newData = data.map((card) => {
                        if (card.id === id) {
                          return {
                            ...card,
                            isActive: !card.isActive,
                          }
                        }
                        return card
                      })

                      this.setState({ data: newData })
                    }}
                    className={
                      isActive
                        ? 'btn btn-sm btn-primary'
                        : 'btn btn-sm btn-success'
                    }
                  >
                    toggle
                  </button>
                </div>
                <div className={isActive ? 'card-body' : 'd-none'}>
                  <ul className='list-group'>
                    {tasks.map((task, idx) => {
                      return (
                        <li key={idx} className='list-group-item'>
                          {task}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
