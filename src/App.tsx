import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
