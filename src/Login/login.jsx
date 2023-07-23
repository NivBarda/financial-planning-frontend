import React from 'react'
import axios from "axios"
import { useState } from 'react'
const Login = () => {
    const [name ,setName] = useState("")
    const [password ,setPassword] = useState("")

    const handleChangeName = (e) => setName(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)
    const handleClick =async () => {
        try {

            axios.post("/" ,{name,password})

        } catch (error) {
            console.log(error);
        }

    }

  return (
    <div>
        <input type="text" placeholder='name' onChange={handleChangeName}/>
        <input type="text" placeholder='password' onChange={handleChangePassword}/>
        <button onClick={handleClick}>Sign In</button>
    </div>
  )
}

export default Login