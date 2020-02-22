
import React, { Component } from 'react'
import axios from 'axios';

class Login extends Component {
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

            axios.post('/user/login',userDetail).then(res=>{
                console.log(res.data);
                if(res.data.error){
                    throw Error("Error")
                }else{
                    const token=res.data.token;
                localStorage.setItem('AUTH-TOKEN', token);
                window.location.href="/"
                }
                
            }).catch(err=>{
                console.log("error");
                
            })

        }

        return (
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
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <label htmlFor="email">User Email</label><br />
                        <input type="text" placeholder="Enter E-Mail" name="email" onChange={this.handleChange} required /><br />
                        <label htmlFor="psw">Password</label><br />
                        <input type="password" placeholder="Enter Password" name="password" onChange={this.handleChange} required />
                        <button type="submit">Login</button><br />
                        <center><a class={"trainer"} href={"trainerlogin"} onClick={handleSubmit}>Login as trainer</a></center>
                    </div>
                </form>
            </body>

        )
    }
}

