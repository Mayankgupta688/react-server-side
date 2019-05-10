import React from "react";
import Head from 'next/head';
import axios from "axios";

export default class AppComponent extends React.Component {

    constructor() {
        super();
        
        this.state = {
            employeeDetails: []
        }
    }

    componentDidMount() {
        axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((empData) => {

            this.setState({
                employeeDetails: empData.data
            })
        })
    }

    render() {
        return (
            <div>
                <Head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
                    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"></link>
                    <link rel="stylesheet" href="/static/base.css" />
                </Head>

                <b>Styling Data Url: https://scotch.io/tutorials/rendering-css-on-servers-for-nextjs-react-apps</b>
                <h1>Employee List:</h1>

                {this.state.employeeDetails.map((employee) => {
                    return (
                        <div style={{'borderBottom': '1px solid red', 'height': '40px', marginTop: '10px'}}>
                            <b>Employee Name: {employee.name}</b>
                        </div>
                    )
                })}

            </div>
        )
    }
}