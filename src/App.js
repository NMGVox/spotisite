import logo from './d5.gif';
import './App.css';
import Button from './Components/Button.js'
import { Link } from 'react-router-dom'

function App() {
  const guest = "Dezmond"
  
  return (
    <div className="App">
      <header className="rootHead">
        <h1 className="rootTitle"> Spotisite!</h1>
      </header>

      <div className="App-header">
      <h1>Welcome {guest}!</h1>
      <div className= "Encaseblck">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="flvtext">
          Log in or watch the kitty dance. Forever.
        </h3>
        <div className= "butblck">
          <Button color = 'linear-gradient(90deg, rgba(0,54,3,1) 45%, rgba(41,41,41,1) 100%)'
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
    </div>
  );
}

export default App;
