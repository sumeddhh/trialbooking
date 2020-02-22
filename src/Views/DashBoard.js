import React, {Component} from 'react'
import SideNav from "../Components/SideNav";
export default class Booking extends Component {

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
                <center>
                    <h2>Dashboard</h2>
                <table>
                    <tr>
                        <th>S.N</th>
                        <th>Date</th>
                        <th>Booked Time</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>02/22/2020</td>
                        <td>10:00 to 10:30</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>02/22/2020</td>
                        <td>10:30 to 11:00</td>
                    </tr>
                </table>
                </center>

                </body>
            </>
        )
    }
}

