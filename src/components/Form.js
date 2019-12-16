import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      item: '',
      quantity: 1
    }
  }

  handleChange(e, key) {
    this.setState({
      [key]: e.target.value
    })
  }

  render() {
    const { item, quantity } = this.state
    return (
      <div className="form ">
        <input 
          onChange={e => this.handleChange(e, 'item')}
          placeholder="What do you need to buy?" 
          type="text" 
        />
        <input 
          onChange={e => this.handleChange(e, 'quantity')}
          placeholder="How many?" 
          type="number" 
        />
        <button onClick={() => this.props.addFn({ item, quantity })}>
          Add Item
        </button>
      </div>
    )
  }
}
