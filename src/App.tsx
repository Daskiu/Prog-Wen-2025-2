import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import {Login, Store, Create, Cart} from "./pages"

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/admin/create' element={<Create/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
  )
}

export default App
