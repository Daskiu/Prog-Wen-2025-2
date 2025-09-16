import './Input.css'
import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'

function Input() {

  const {setName} = useContext(UserContext);
  const [value, setValue] = useState("");

  const handleUpdate = () => {
    if (value.trim() !== "") {
      setName(value);
      setValue("")
    }
  }

  return (
    <>
      <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder='Escribe un nombre'
      />
      <button onClick={handleUpdate}>Update</button>
    </>
  )
}

export default Input