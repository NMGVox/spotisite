import React from 'react'
import  '../App.css';

const Login = ({ color, fs }) => {
    return (
        <div className = "EncaseblckCred1">
            <form className = "EncaseblckCred2">
                <input className = "txtfld" type="text" placeholder="Enter Username Ex. DezVox"></input>
                <input className = "txtfld" type="password" placeholder="Enter Password"></input>
                <input className = "but" type="submit" value="Log in" 
                        style = {{'background':color, fontSize: fs}}
                >
                </input>
            </form>
        </div>
    )
}

export default Login
