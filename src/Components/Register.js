import React, { useRef, useState } from 'react'
import { useAuth } from '../Context/Authcontext'
import {  useHistory } from 'react-router-dom'

const Register = ( { color, fs } ) => {
    {/* Variables to keep track of user input. */}
    const userRef = useRef()
    const emailRef = useRef()
    const confemailRef = useRef()
    const passRef = useRef()
    const confpassRef = useRef()
    const {  signup  } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        {/*Compares password to confirm password to ensure that both are the same */}
        if (passRef.current.value !== confpassRef.current.value){
            return setError("Passwords don't match.")
        }
        {/*Ditto, but for email instead*/}
        if (emailRef.current.value !== confemailRef.current.value){
            return setError("Emails don't match.")
        }
        
        try{
            {/*Registration succeeded? Go to the dashboard. */}
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passRef.current.value)
            history.push('/dashboard')
        } catch(error){
            {/*Failed? Set an error, and display more info in the console. (for dev purposes).*/}
            setError("Failed to create an account.")
            console.log(error)
        }
        setLoading(false)
        {/* Set loading is used to disable the register button. Prevents user ffrom spamming and potentially making
        multiple of the same account*/}
    }

    return (
        <div>
            <div style= {{'left': '66%', 'top': '62%'}} className = "EncaseblckCred1">
            {error && <p style={{'color': 'red', 'fontSize' : '10px'}}>{error}</p>}
            <form onSubmit={handleSubmit} className = "EncaseblckCred2">
                <fieldset id = "usernameReg">
                    <input ref= { userRef } className = "txtfld" type="text" required placeholder="Enter Username Ex. DezVox"></input>
                </fieldset>
                <fieldset id= "email-confirm">
                    <input ref= { emailRef } className = "txtfld" type="text" required placeholder="Enter Email"></input>
                    <input ref= { confemailRef } className = "txtfld" type="text" required placeholder="Confirm Email"></input>
                </fieldset>
                <fieldset id="password-confirm">
                    <input ref= { passRef } className = "txtfld" type="password" required placeholder="Enter Password"></input>
                    <input ref= { confpassRef } className = "txtfld" type="password" required placeholder="Confirm Password"></input>
                </fieldset>
                <input className = "but" type="submit" value="Register!" 
                        style = {{'background':color, fontSize: fs}}
                        disabled={loading}
                >
                </input>
            </form>
        </div>
        </div>
    )
}

export default Register
