import { useState } from 'react'
import './App.scss'
import NavBar from "./components/NavBar/NavBar"
import ItemList from "./components/ItemList/ItemList"

function App() {

  const [toDoItems, setToDoItems] = useState<string[]>([])

  const addItem = (newItem: string) => {
    setToDoItems([...toDoItems, newItem])
  }

  const deleteItem = (index: number) => {
    const updatedItems = [...toDoItems];
    updatedItems.splice(index, 1);
    setToDoItems(updatedItems)
  }

  const resetItems = () => {
    setToDoItems([])
  }

  return (
    <div className="app_container">
      <h1>My Todos</h1>

      <NavBar addItem={addItem} resetItem={resetItems}/>
      <ItemList toDoItems={toDoItems} deleteItem={deleteItem}/>
        
    </div>
  )
}

export default App