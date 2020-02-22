import React, {Component} from 'react'
export default class SignUp extends Component {
    render() {
        return (
            <>
                <body>

                <form class="signup">
                    <h2 align="center">Sign Up Form</h2>
                    <div className="container">
                        <label htmlFor="email">E-Mail</label><br/>
                        <input type="text" placeholder="Enter E-Mail" name="uname" required/><br/>
                        <label htmlFor="email">Name</label><br/>
                        <input type="text" placeholder="Enter name" name="uname" required/><br/>
                        <label htmlFor="psw">Password</label><br/>
                        <input type="password" placeholder="Enter Password" name="psw" required/>
                        <label htmlFor="psw">Confirm Password</label><br/>
                        <input type="password" placeholder="Confirm Password" name="psw" required/>
                        <label>Sign Up as </label><input type="radio" value="User" name="usertype"/>User<input name="usertype" type="radio" value="Trainer"/>Trainer
                        <button type="submit">Sign Up</button><br/>
                    </div>
                </form>
                </body>
            </>
        )
    }
}

