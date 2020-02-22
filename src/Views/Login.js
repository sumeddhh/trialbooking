import React, {Component} from 'react'
export default class Login extends Component {
    render() {
        return (
            <>
                <body className="Login">

                <form>
                    <div className="container">
                        <label htmlFor="email">User Email</label><br/>
                        <input type="text" placeholder="Enter E-Mail" name="uname" required/><br/>
                            <label htmlFor="psw">Password</label><br/>
                            <input type="password" placeholder="Enter Password" name="psw" required/>
                        <button type="submit"><a href={"Booking"}>Login</a></button><br/>
                        <center><a class={"trainer"} href={"LoginTrainer"}>Login as trainer</a></center>
                    </div>
                </form>
                </body>
            </>
                )
                }
                }

