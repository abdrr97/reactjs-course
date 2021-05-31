import React, { Component } from 'react'

export default class CardList extends Component {
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

    const toggleVis = (id) => {
      let newData = data.map((d) => {
        if (d.id === id) {
          return {
            ...d,
            isActive: !d.isActive,
          }
        }
        return d
      })
      this.setState({ data: newData })
    }
    return (
      <div className='row'>
        {data.map(({ id, title, tasks, isActive }) => {
          return (
            <div key={id} className='col-3'>
              <div className='mx-4 card'>
                <div className='card-header d-flex justify-content-between'>
                  <h4 className='fs-4'>
                    {title} - {id}
                  </h4>
                  <button
                    onClick={() => toggleVis(id)}
                    className='btn btn-sm btn-outline-primary'
                  >
                    {!isActive ? 'on' : 'off'}
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
