import './ProfileChild.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import ProfileGrandChild from "../ProfileGrandChild/ProfileGrandChild";

function ProfileChild() {

    const {name} = useContext(UserContext)

  return (
    <>
      <p>I'm the ProfileChild of the Profile of {name}</p>
      <ProfileGrandChild/>
    </>
  )
}

export default ProfileChild