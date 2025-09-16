import './Header.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

function Header() {

  const {name} = useContext(UserContext)

  return (
    <>
      <h1>Welcome, {name} 👋. I'm Header</h1>
    </>
  )
}

export default Header