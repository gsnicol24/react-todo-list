import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [newItem, setNewItem] = useState("")
  const [todoListItems, setTodoListItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:3100/todos')
      .then(todolistItems => todolistItems.json())
      .then(data => setTodoListItems(data))
  }, []);

  const saveItem = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        { title: newItem }
      )
    };

    fetch('http://localhost:3100/todos', requestOptions)
      .then(response => response.json())
      .then(data => {
        setTodoListItems([data, ...todoListItems])
        setNewItem("")
      });
  }

  return (
    <div className="App">
      {
        todoListItems.map((todoListItem, idx) =>
          <div>
            <input type="checkbox"></input>
            {todoListItem.title}
          </div>
        )
      }
      <input type="text" placeholder="Item Name" value={newItem} onChange={(e) => setNewItem(e.target.value)}></input>
      <button onClick={async () => await saveItem()}>Add Todo List Item</button>
    </div>
  );
}

export default App;
