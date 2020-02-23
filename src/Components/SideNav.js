import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/userAction';
class NavBar extends Component {
    render() {
        const handleLogout=()=>{
            console.log("Logout");
            this.props.logoutUser();
        }
        return (
            <div className="sidenav">
                <a href="/Dashboard">Home</a>
                <a href="/Booking">Bookings</a>
                <a href="/Center">Center</a>
                <a href="/Settings">Settings</a>
                <a href="/" onClick={handleLogout}>Logout</a>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
    credentials: state.user.credentials
});

const mapActionToProps = {
    logoutUser
}

export default connect(mapStateToProps, mapActionToProps)(NavBar);

