import React, {Component} from 'react'
export default class Login extends Component {
    render() {
        return (
            <>
                <body className="Login">
                <nav>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Sign Up</a></li>
                    </ul>
                </nav>
                <div class="container">
                    <a class="logo" href="/">Trial Booking</a>
                </div>
                <form>
                    <div className="container">
                        <label htmlFor="email">User Email</label><br/>
                        <input type="text" placeholder="Enter E-Mail" name="uname" required/><br/>
                            <label htmlFor="psw">Password</label><br/>
                            <input type="password" placeholder="Enter Password" name="psw" required/>
                                <button type="submit">Login</button><br/>
                        <center><a class={"trainer"} href={"trainerlogin"}>Login as trainer</a></center>
                    </div>
                </form>
                </body>
            </>
                )
                }
                }

