import React, { useRef, useState } from 'react'
import { useAuth } from '../Context/Authcontext'
import {  useHistory } from 'react-router-dom'
import  '../App.css'


const Login = ({ color, fs }) => {
    const emailRef = useRef()
    const passRef = useRef()
    const {  login  } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passRef.current.value)
            history.push('/dashboard')
        } catch(error){
            setError("Failed to sign in.")
            console.log(error)
        }
        setLoading(false)
    }
    
    return (
        <div className = "EncaseblckCred1">
            <form className = "EncaseblckCred2" onSubmit={handleSubmit}>
                {error && <p style={{'color': 'red', 'fontSize' : '10px'}}>{error}</p>}
                <input ref = { emailRef } className = "txtfld" type="text" placeholder="Enter Email"></input>
                <input ref = { passRef }  className = "txtfld" type="password" placeholder="Enter Password"></input>
                <input className = "but" type="submit" value="Log In" 
                        style = {{'background':color, fontSize: fs}
                        }
                        disabled={loading}
                >
                </input>
            </form>
        </div>
    )
}

export default Login
