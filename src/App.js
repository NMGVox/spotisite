import './App.css';
import Button from './Components/Button.js'
import { Link } from 'react-router-dom'
import Body from './Components/body.js'

function App() {
  return (
    <div className="App">
      <header className="rootHead">
        <h1 className="rootTitle"> Spotisite!</h1>
      </header>
      <Body />
    </div>
  );
}

export default App;
