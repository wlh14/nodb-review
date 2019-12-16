import React, {Component} from 'react'
import ListItem from './ListItem'

export default class List extends Component {
  render() {
    return (
      <div className="list">
        {this.props.data.map(itemObj => (
          <ListItem
            updateFn={this.props.updateFn}
            deleteFn={this.props.deleteFn}
            key={itemObj.id} // If you want to demonstrate what will happen without a key, comment this out and try to edit / delete some items!
            data={itemObj}
          />
        ))}
      </div>
    )
  }
}