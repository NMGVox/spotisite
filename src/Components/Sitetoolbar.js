import React, { useState } from 'react'
import { useAuth } from '../Context/Authcontext'
import Button from './Button'


const Sitetoolbar = () => {
    const {  logout, currentUser  } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handler(e) {
        e.preventDefault()
        try{
            {/*Registration succeeded? Go to the dashboard. */}
            setError('')
            setLoading(true)
            await logout()
        } catch(error){
            {/*Failed? Set an error, and display more info in the console. (for dev purposes).*/}
            setError("Failed to log out.")
            console.log(error)
        }
    }

    return (
        <div className="rootHead">
            <header>
            <h1 className="rootTitle"> Spotisite!</h1>
          </header>
          {currentUser ? <Button   position= 'absolute'
                    disabled = { loading }
                    right = '1vh'
                    color='black'
                    text= 'Log Out!' 
                    onClick = { handler }/>: ""}
        </div>
    )
}

export default Sitetoolbar
