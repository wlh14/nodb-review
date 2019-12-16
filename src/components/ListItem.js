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
    this.props.updateFn()
    this.toggleEdit()
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
            <h2>{this.state.quantity}</h2>
            <h3>{this.state.item}</h3>
            <button onClick={() => this.props.deleteFn()}>Delete</button>
            <button onClick={() => this.toggleEdit()}>Edit</button>
          </div>
        )}
      </div>
    )
  }
}
