import React, { Component } from 'react'

export default class ToggleVisibility extends Component {
  state = {
    toggle: true,
  }

  render() {
    let { toggle } = this.state
    return (
      <div>
        <h1>{toggle ? 'Hello' : 'World'}</h1>
        <button onClick={() => this.setState({ toggle: !toggle })}>
          Toggle
        </button>
      </div>
    )
  }
}
