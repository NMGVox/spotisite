import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../Context/Authcontext'

export default function Privateroute ({component: Component, ...rest  }) {
    const {  currentUser  } = useAuth()
    
    return (
        <div>
            <Route {...rest} render ={props => {
                {/*If no current user is logged in, gdet redirected to the landing page.*/}
                return currentUser ? <Component {...props} /> : <Redirect to="/"/>
            }}
            
            ></Route>    
        </div>
    )
}

