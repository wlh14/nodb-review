import React from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
    this.addItem = this.addItem.bind(this)
    this.updateItem = this.updateItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  componentDidMount() {
    axios.get('/api/list').then(res => {
      this.setState({
        list: res.data
      })
    })
  }

  addItem(newItem) {
    axios.post('/api/list', { newItem }).then(res => {
      this.setState({
        list: res.data
      })
    })
  }

  updateItem(updatedInfo, id) {
    axios.put(`/api/list/${id}`, { updatedInfo }).then(res => {
      this.setState({
        list: res.data
      })
    })
  }

  removeItem(id) {
    axios.delete(`/api/list/${id}`).then(res => {
      this.setState({
        list: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Form addFn={this.addItem} />
          <List
            deleteFn={this.removeItem}
            updateFn={this.updateItem}
            data={this.state.list}
          />
        </main>
      </div>
    )
  }
}

export default App
