import React, { Component } from 'react';
import { Card,Button } from 'react-bootstrap';
import {  BrowserRouter as Router, Route, Link } from "react-router-dom";


class UserRead extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            street:"",
            street2:"",
            city:"",
            state:"",
            zipcode:""
        }

        this.goToUpdateUser = this.goToUpdateUser.bind(this);
    }
    
    goToUpdateUser(){
        this.props.history.push('/admin/users-update/:uid');
    }

    componentDidMount() {
      

          fetch("https://prod-api.sidecarhealth.com/auth/v1/location", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-api-key" : "some-key"
            }
          }).then(function(response) {
            console.log("success");
            response.text().then(function(result){
                console.log("result");
                console.log(result);
            }).catch(function(error){
                console.log("error");
            console.log(error);
            });
          }, function(error) {
            console.log("error");
            console.log(error);
          })

    }

    render() {
        return (
            <div className="container">
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <Card>
                            <Card.Header>Profile</Card.Header>
                            <Card.Body>
                                <div className="row align-items-start">
                                    <div className="col-sm-12">
                                        <b>First name</b>
                                        <br/>
                                        Folau
                                    </div>
                                </div>
                                <br/>
                                <div className="row align-items-start">
                                    <div className="col-sm-12">
                                        <b>Last name</b>
                                        <br/>
                                        Kaveinga
                                    </div>
                                </div>
                                <br/>
                                <div className="row align-items-start">
                                    <div className="col-sm-12">
                                        <b>Email</b>
                                        <br/>
                                        folaukaveinga@gmail.com
                                    </div>
                                </div>
                                <br/>
                                <div className="row align-items-start">
                                    <div className="col-sm-12">
                                        <b>Phone</b>
                                        <br/>
                                        3109934731
                                    </div>
                                </div>
                                <br/>
                                <div className="row align-items-start">
                                    <div className="col-sm-12">
                                        <b>Address</b>
                                        <br/>
                                        4849 w 111th street, Inglewood, CA, 90304
                                    
                                    </div>
                                </div>
                                <br/>
                                <div className="row align-items-start">
                                    <div className="col-sm-12">
                                        <b>Roles</b>
                                        <br/>
                                        USER,ADMIN,MANAGER
                                    
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-sm">
                                        <Button variant="primary"  onClick={this.goToUpdateUser}>update</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

export default UserRead;