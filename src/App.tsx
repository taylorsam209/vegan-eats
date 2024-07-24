import NavBar from './components/NavBar/NavBar'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
