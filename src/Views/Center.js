import React, { Component } from 'react'
import SideNav from "../Components/SideNav";
import axios from 'axios';
export default class Center extends Component {
    state = {
        traningcenters: []
    }

    componentDidMount() {
        axios.get('/tc/getAllTrainingCenter').then(res => {
            console.log("book", res.data.data);
            this.setState({
                traningcenters: res.data.data
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
                    <br /><br /><br /><br /><br /><br /><br />
                    {this.state.traningcenters.length > 0 ? (
                        // <div className="main2">
                        //     <img className="img1" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        //     <img className="img2" /><br /><br />
                        //     <img className="img3" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        // </div>
                        <div className="main2">
                            {this.state.traningcenters.map(data => (
                                <div>
                                    <a href={`book/${data._id}`}>
                                        <img className="img1" /> &nbsp;&nbsp;&nbsp;
                                    </a>
                                </div>
                            ))}
                        </div>
                    ) : (
                            <h2>No Training center Available Right Now</h2>
                        )}

                </body>
            </>
        )
    }
}

