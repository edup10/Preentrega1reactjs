import { useState } from "react"

import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"


function App() {
  const [cartCount, setCartCount] = useState(5)

  const handleCount = () => {
    setCartCount( x=>x+1 )
  }
  
  return (
    <>
     <NavBar cartCount={cartCount} tittle="Mi Store"/>
     <button className="btn btn-warning" onClick={handleCount}>Agregar</button>
     <ItemListContainer greetings="Electronic Store"/>

    </>
  )
}

export default App
