import './App.css';
import Body from './Components/body.js'
import { AuthProvider } from './Context/Authcontext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard.js'
import Privateroute from './Components/Privateroute';

function App() {
  return (
      <div className="App">
        <header className="rootHead">
          <h1 className="rootTitle"> Spotisite!</h1>
        </header>
        <AuthProvider>
          <Router>
            <Switch>
              <Privateroute exact path="/dashboard" component = { Dashboard }/>
              <Route exact path="/" component = { Body }/>
            </Switch>
          </Router>
        </AuthProvider>
      </div>
  );
}

export default App;
