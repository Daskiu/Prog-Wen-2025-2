import './ProfileGrandChild.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

function ProfileGrandChild() {
  
    const {name} = useContext(UserContext)
  

  return (
    <>
      <p>I'm the ProfileGrandChild of Profile, that means I'm the child of ProfileChild {name}</p>
    </>
  )
}

export default ProfileGrandChild