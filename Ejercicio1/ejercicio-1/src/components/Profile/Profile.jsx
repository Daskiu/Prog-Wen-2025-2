import './Profile.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import ProfileChild from "../ProfileChild/ProfileChild"

function Profile() {

  const {name} = useContext(UserContext)

  return (
    <>
        <p>Profile of {name}</p>
        <ProfileChild/>
    </>
  )
}

export default Profile