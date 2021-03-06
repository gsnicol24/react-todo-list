import './App.css';
import { useState, useEffect } from 'react'
import { Label } from './labels/label';
import { LabelList } from './labels/label-list';

function App() {
  const [newItem, setNewItem] = useState("")
  const [newItemLabels, setNewItemLabels] = useState([])
  const [todoListItems, setTodoListItems] = useState([])
  const [labels, setLabels] = useState([])

  useEffect(() => {
    fetch('http://localhost:3100/todos')
      .then(todolistItems => todolistItems.json())
      .then(data => setTodoListItems(data))

    fetch('http://localhost:3100/labels')
      .then(labels => labels.json())
      .then(data => setLabels(data))
  }, []);

  const saveItem = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          title: newItem,
          labels: newItemLabels.map(m => m._id)
        }
      )
    };

    fetch('http://localhost:3100/todos', requestOptions)
      .then(response => response.json())
      .then(data => {
        setTodoListItems([data, ...todoListItems])
        setNewItem("")
        setLabels([...labels, ...newItemLabels])
        setNewItemLabels([])
      });
  }

  return (
    <div className="App">
      <div className="todo-list-items">
        {
          todoListItems.map((todoListItem) =>
            <div key={todoListItem._id} className="todolist-item">
              <input type="checkbox"></input>
              {todoListItem.title}
              <LabelList labels={todoListItem.labels} max="2"/>
            </div>
          )
        }
      </div>
      <div className="add-new-item-container">
        <input type="text" placeholder="Item Name" value={newItem} onChange={(e) => setNewItem(e.target.value)}></input>
        <button
          disabled={!newItem}
          onClick={async () => await saveItem()}>
          Add Todo List Item
        </button>

        <LabelList
          labels={newItemLabels}
          onClick={(label) => {
            setLabels([label, ...labels])
            setNewItemLabels(newItemLabels.filter(l => l !== label))
          }} />

        <div>
          <label>Available Labels:</label>
          <LabelList
            labels={labels}
            onClick={(label) => {
              setNewItemLabels([label, ...newItemLabels])
              setLabels(labels.filter(l => l !== label))
            }} />
        </div>
      </div>
    </div>
  );
}

export default App;
