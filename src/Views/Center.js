import React, {Component} from 'react'
import SideNav from "../Components/SideNav";
export default class Center extends Component {

    render() {

        return (
            <>


                <body class="db">
                <div className="sidenav">
                    <a href={"Dashboard"}>Home</a>
                    <a href={"Booking"}>Bookings</a>
                    <a href={"Center"}>Center</a>
                    <a href={"Settings"}>Settings</a>
                </div>
                <br/><br/><br/><br/><br/><br/><br/>
                <div className="main2">
                    <img className="img1"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img className="img2"/><br/><br/>
                    <img className="img3"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                </body>
            </>
        )
    }
}

