import { useAuth } from '../Context/Authcontext'
import {  useState, useEffect } from 'react'
import firebase from '../firebase'

const Dashboard = () => {
    const { currentUser } = useAuth()
    const[username, setUsername] = useState("")

    useEffect(() => {
        const getUsername = async() =>{
          await firebase.database().ref('users/' + currentUser.uid + '/username').on(
            'value', (snapshot) => {
              const data = snapshot.val();
              setUsername(data)
            }
          )
        }
        currentUser && getUsername()
      }, [])

    return (
        <div className='dashboard'>
            <div className = 'dashblock' style = {{'bottom': '10vh'}}>
              <h2 className = 'flvtext'>Ya made it, {currentUser ? username :"guest"}!</h2>
            </div>
            <div className = 'dashblock' style = {{'right': '35vh'}}>
              <h2 className = 'flvtext'>Ya made it, {currentUser ? username :"guest"}!</h2>
            </div>
        </div>
    )
}

export default Dashboard
