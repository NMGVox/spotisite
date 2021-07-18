import { useAuth } from '../Context/Authcontext'

const Dashboard = () => {
    const { currentUser } = useAuth()
    return (
        <div>
            Ya made, {currentUser ? currentUser.email.split('@')[0] :"guest"}!
        </div>
    )
}

export default Dashboard
