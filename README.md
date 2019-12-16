This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 3/4 Stack Review Plan

We're building a shopping list, and here's our plan:

### List Data Structure
```javascript
[
   {
      id: number,
      item: string,
      done: boolean,
      quantity: number
   },
   ...
]
```

### Endpoints
* `app.get('/api/list', ctrl.getList)`
   * `res.status(200).send(list)`
* `app.post('/api/list', ctrl.addItem)`
   * body = `{item, quantity}`
   * `res.status(200).send(list)`
* `app.put('/api/list/:id', ctrl.updateItem)`
   * body = `{complete, quantity}`
   * `res.status(200).send(list)`
* `app.delete('/api/list/:id', ctrl.deleteItem)`
   * `res.status(200).send(list)`

### Component Tree

```
                         __________
                        |          |  state = {
                        |  App.js  |    list: []
                        |__________|  }
                        /     |    \
                       /      |     \
                      /       |      \
               ______/   _____|_____  \_________
state = {     |       | |           | |         | props = {
  item: ''    |Form.js| | Header.js | | List.js |   list: [],
  quantity: 1 |_______| |___________| |_________|   updateItem(),
}                                             \     deleteItem()
                                               \  }
                                                \
                                                _\_________
                                               |           | state = {
                                               |ListItem.js|   isEditable: false,
                                               |___________|   item: '',
                                                               quantity: 1,
                                                               done: false
                                                             }
                                                             props = {
                                                                updateItem(),
                                                                delteItem()
                                                             }
```

### 