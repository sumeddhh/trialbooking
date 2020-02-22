import React, {Component} from 'react'
import NavBar from "../Components/NavBar";
export default class Booking extends Component {
    state={
        display: false,
        date:""
    }
    render() {
        const handleChange=(event)=>{
            this.setState({
                [event.target.name]: event.target.value,
                display: true
            })
        }
        return (
            <>

                <div className="sidenav">
                    <a href={"Dashboard"}>Home</a>
                    <a href={"Booking"}>Bookings</a>
                    <a href={"Center"}>Center</a>
                    <a href={"Settings"}>Settings</a>
                </div>
                <body>
                <center>
                    <h2>Book time</h2>
                    <input type="date" id="datepicker" onChange={handleChange}/>
                    {this.state.display&&(
                        <div>
                        <input type="button" value="30 Minutes"></input>&nbsp;&nbsp;
                        <input type="button" value="1 Hour" onChange={handleChange}></input>


                        <table border="0px">
                            <tr>
                                <th>S.N</th>
                                <th>Time-slots</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>10:00</td>
                                <td><a href="">Confirm</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>10:30</td>
                                <td><a href="">Confirm</a></td>
                            </tr>
                        </table>
                        </div>
                    )}

                </center>
                </body>
            </>
        )
    }
}

