const Register = ( { color, fs } ) => {
    return (
        <div>
            <div style= {{'left': '66%', 'top': '62%'}} className = "EncaseblckCred1">
            <form className = "EncaseblckCred2">
                <input className = "txtfld" type="text" placeholder="Enter Username Ex. DezVox"></input>
                <input className = "txtfld" type="text" placeholder="Enter Email"></input>
                <input className = "txtfld" type="text" placeholder="Confirm Email"></input>
                <input className = "txtfld" type="password" placeholder="Enter Password"></input>
                <input className = "txtfld" type="password" placeholder="Confirm Password"></input>
                <input className = "but" type="submit" value="Register!" 
                        style = {{'background':color, fontSize: fs}}
                >
                </input>
            </form>
        </div>
        </div>
    )
}

export default Register
