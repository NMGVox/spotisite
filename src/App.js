import './App.css';
import Body from './Components/body.js'
import { AuthProvider } from './Context/Authcontext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard.js'
import Privateroute from './Components/Privateroute';
import SiteToolbar from './Components/Sitetoolbar.js' 

function App() {
  return (
      <div className="App">
        <AuthProvider>
          <SiteToolbar />
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
