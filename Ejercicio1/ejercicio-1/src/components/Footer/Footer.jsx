import './Footer.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

function Footer() {

  const {name} = useContext(UserContext)

  return (
    
    <>
      <h1>You're on the Footer, {name}</h1>
    </>
  )
}

export default Footer