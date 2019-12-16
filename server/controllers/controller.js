const list = [{
  id: 0,
  item: 'eggs',
  done: false,
  quantity: 12
},
{
  id: 1,
  item: 'bread',
  done: false,
  quantity: 1
}]

let id = 2

module.exports = {
  getList: (req, res) => {
    res.status(200).send(list)
  },
  addItem: (req, res) => {
    const {newItem} = req.body
    newItem.done = false
    newItem.id = id
    id++
    
    list.push(newItem)
    res.status(201).send(list)
  },
  updateItem: (req, res) => {
    const {updatedInfo} = req.body
    const {id} = req.params
    const index = list.findIndex(el => el.id === +id)
    const updatedObj = {...list[index], ...updatedInfo}
    list[index] = updatedObj
    res.status(200).send(list)
  },
  removeItem: (req, res) => {
    const {id} = req.params
    const index = list.findIndex(el => el.id === +id)
    list.splice(index, 1)
    res.status(200).send(list)
  }
}