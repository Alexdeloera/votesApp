
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Admin } from './layout/Admin'
import { Home } from './views/Home'
import { Register } from './views/Register'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Admin />}>
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Route>
    </Routes>
  )

}

export default App
