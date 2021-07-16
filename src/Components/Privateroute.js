import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../Context/Authcontext'

export default function Privateroute ({component: Component, ...rest  }) {
    const {  currentUser  } = useAuth()
    
    return (
        <div>
            <Route {...rest} render ={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/"/>
            }}
            
            ></Route>    
        </div>
    )
}

