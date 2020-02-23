import React, { Component } from 'react'
import SideNav from "../Components/SideNav";
import axios from 'axios';
export default class Booking extends Component {
    state = {
        bookings: []
    }

    componentDidMount() {
        axios.get('/booking').then(res => {
            console.log("book", res.data);
            this.setState({
                bookings: res.data.booked
            })

        }).catch(err => {
            console.log(err);
        })
    }

    render() {

        return (
            <>
                <body class="db">
                    <SideNav />
                    <center>
                        <h2>Dashboard</h2>
                        {this.state.bookings.length > 0 ? (
                            <table>
                                <tr>
                                    <th>S.N</th>
                                    <th>Date</th>
                                    <th>Vechile</th>
                                    <th>Duration</th>
                                    <th>Booked Time</th>
                                </tr>
                                {this.state.bookings.map(res => (
                                    <tr>
                                        <td>1</td>
                                        <td>{res.date}</td>
                                        <td>Bike {res.bike}</td>
                                        <td>{res.duration} min</td>
                                        <td>{res.startTime}</td>
                                    </tr>
                                ))}

                            </table>
                        ) : (
                                <div>
                                    <h1>No Bookings Available</h1>
                                    <a href="/Center">Book Now</a>
                                </div>
                            )}
                    </center>

                </body>
            </>
        )
    }
}

