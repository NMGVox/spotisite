import './App.css';
import { Link } from 'react-router-dom'
import Body from './Components/Body.js'
import { AuthProvider } from './Context/Authcontext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <header className="rootHead">
          <h1 className="rootTitle"> Spotisite!</h1>
        </header>
        <Body />
      </div>
    </AuthProvider>
  );
}

export default App;
