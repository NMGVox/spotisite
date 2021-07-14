import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button.js'
import logo from '../d5.gif';
import Login from  './Login.js'

const body = () => {
    const onClick = () => {
        console.log("You clicked me!")
    }

    const guest = "Guest"
    return (
        <div>
          <div className="App-header">
          <h1>Welcome {guest}!</h1>
          <div className= "Encaseblck">
            <img src={logo} className="App-logo" alt="logo" />
            <h3 className="flvtext">
              Log in or watch the kitty dance. Forever.
            </h3>
            <div className= "butblck">
              <Button color = 'linear-gradient(90deg, rgba(0,54,3,1) 45%, rgba(41,41,41,1) 100%)'
                      onClick={onClick}
                      fs = '85%' 
                      className= "Logb" 
                      text = "Login!"
              />
              <Button color = 'linear-gradient(90deg, rgba(41,41,41,1) 45%, rgba(0,54,3,1) 100%)' 
                      fs = "75%"
                      text = "No account? Register!"/>
              </div>
              
            </div>
          </div>
          <Login color = 'linear-gradient(90deg, rgba(0,54,3,1) 45%, rgba(41,41,41,1) 100%)'
                 fs = '80%'
          />
        </div>
    )
}

export default body
