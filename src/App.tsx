import { useState } from 'react'
import './App.scss'
import NavBar from "./components/NavBar/NavBar"
import ItemList from "./components/ItemList/ItemList"

function App() {


  return (
    <div className="app_container">
      <h1>My Todos</h1>

      <NavBar />
      <ItemList />
        
    </div>
  )
}

export default App