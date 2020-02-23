import React, {Component} from 'react'
import NavBar from "../Components/NavBar";
import axios from 'axios'
export default class LoginTrainer extends Component {
    state = {
        email: "",
        password: "",
        errors: {}
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
        const handleSubmit = (event) => {
            event.preventDefault();
            let userDetail = {
                "email": this.state.email,
                "password": this.state.password,
            }
            console.log(userDetail);

            axios.post('/user/login', userDetail).then(res => {
                console.log(res.data);
                if (res.data.error) {
                    throw Error("Error")
                } else {
                    const token = res.data.token;
                    localStorage.setItem('AUTH-TOKEN', token);
                    window.location.href = "/"
                }

            }).catch(err => {
                console.log("error");

            })

        }
        return (
            <>   <NavBar/>
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

