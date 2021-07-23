import Button from './Button.js'
import logo from '../d5.gif';
import Login from  './Login.js'
import Register from  './Register.js'
import {  useState, useEffect } from 'react'
import  { useAuth } from '../Context/Authcontext'
import firebase from '../firebase'
import { Link } from 'react-router-dom'

const Body = () => {
  const [showLogin, setShowLogin] = useState(false)  
  const[showReg, setShowReg] = useState(false)
  const[username, setUsername] = useState("")

  {/*Once the log in button is clicked, display the login div and hide the registration div if it is visible*/}
  const onClickLog = () => {
      setShowLogin(!showLogin)
      showReg ? setShowReg(!showReg) : setShowReg(showReg)
    }
  {/*Vice-versa*/}
  const onClickReg = () => {
    setShowReg(!showReg)
    showLogin ? setShowLogin(!showLogin) : setShowLogin(showLogin)
  }
  
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


    {/*Get current user details from AuthContext */}
    const {  currentUser }  = useAuth()
    
    return (
        <div>
          <div className="App-header">
            {/*Landing Page */}
          <h1 className = "Welcome">Welcome {currentUser ? username :"guest"}!</h1>
          <div className= "Encaseblck">
            <img src={logo} className="App-logo" alt="logo" />
            
            {currentUser ? 
            <Link to= '/dashboard'><h3 className="flvtext">
              Go to your dashboard!
            </h3></Link> :
            <h3 className="flvtext">
              Log in or watch the kitty dance. Forever.
            </h3>
            }

            {currentUser ? "":
             <div className= "butblck">{/* Contains code thta controls the two landing page buttons.*/}
              <Button color = 'linear-gradient(90deg, rgba(0,54,3,1) 45%, rgba(41,41,41,1) 100%)'
                      onClick={onClickLog}
                      fs = '85%' 
                      className= "Logb" 
                      text = {showLogin ? "Nevermind" : "Log in!"}
              />
              <Button color = 'linear-gradient(90deg, rgba(41,41,41,1) 45%, rgba(0,54,3,1) 100%)' 
                      onClick={onClickReg}
                      fs = "75%"
                      text = {showReg ? "Nevermind!": "No account? Register!"}/> 
              </div>}
            </div>
          </div>
          <div>
            {/*Login and register components are placed here, outside of the main div. For styling purposes.*/}
            {showLogin && <Login color = 'linear-gradient(90deg, rgba(0,54,3,1) 45%, rgba(41,41,41,1) 100%)'
                  fs = '80%'
            />}
            {showReg && <Register color = 'linear-gradient(90deg, rgba(41,41,41,1) 45%, rgba(0,54,3,1) 100%)'
                  fs= '80%'
            />}
          </div>
        </div>
    )
}

export default Body
