import React, {Component} from 'react'
export default class NavBar extends Component {
    render() {
        return (
            <>
                <div className="sidenav">
                    <a href={"Dashboard"}>Home</a>
                    <a href={"Booking"}>Bookings</a>
                    <a href="#">Center</a><a href="#">Settings</a>
                </div>

                <div className="main2">
                    <img class="img1"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img class="img2"/><br/><br/>
                    <img class="img3"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img class="img1"/>
                </div>
            </>
        )
    }
}

