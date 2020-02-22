import React, {Component} from 'react'
export default class LoginTrainer extends Component {
    render() {
        return (
            <>
                <body>

                <form>
                    <div className="container">
                        <label htmlFor="email">Training Center E-Mail</label><br/>
                        <input type="text" placeholder="Enter E-Mail" name="uname" required/><br/>
                        <label htmlFor="psw">Password</label><br/>
                        <input type="password" placeholder="Enter Password" name="psw" required/>
                        <button type="submit">Login</button><br/>
                        <center><a class={"trainer"} href="/">Login as user</a></center>
                    </div>
                </form>
                </body>
            </>
        )
    }
}

