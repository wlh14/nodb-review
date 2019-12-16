import React, { Component } from 'react'

export default class ListItem extends Component {
  constructor() {
    super()
    this.state = {
      isEditable: false,
      item: '',
      quantity: 1,
      done: false
    }
  }

  componentDidMount() {
    this.setState({
      item: this.props.data.item,
      quantity: this.props.data.quantity,
      done: this.props.data.done
    })
  }

  toggleEdit() {
    this.setState({
      isEditable: !this.state.isEditable
    })
  }

  handleChange(e, key) {
    this.setState({
      [key]: e.target.value
    })
  }

  save() {
    const {item, quantity, done} = this.state
    this.props.updateFn({item, quantity, done}, this.props.data.id)
    this.toggleEdit()
  }

  toggleDone() {
    this.setState({done: !this.state.done}, () => {  // the callback function here ensures that the logic inside will be run AFTER state changes
      const {item, quantity, done} = this.state
      this.props.updateFn({item, quantity, done}, this.props.data.id)
    })
  }

  render() {
    return (
      <div className="list-item">
        {this.state.isEditable ? (
          <div>
            <input
              type="number"
              onChange={e => this.handleChange(e, 'quantity')}
              value={this.state.quantity}
            />
            <input
              onChange={e => this.handleChange(e, 'item')}
              value={this.state.item}
            />
            <button onClick={() => this.save()}>Save</button>
          </div>
        ) : (
          <div>
            <input type="checkbox" checked={this.state.done} onChange={() => this.toggleDone()} />
            <h2 style={this.state.done ? {textDecoration: 'line-through'} : null}>{this.state.quantity}</h2>
            <h3 style={this.state.done ? {textDecoration: 'line-through'} : null}>{this.state.item}</h3>
            <button onClick={() => this.props.deleteFn(this.props.data.id)}>Delete</button>
            <button onClick={() => this.toggleEdit()}>Edit</button>
          </div>
        )}
      </div>
    )
  }
}
