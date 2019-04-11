import React, { Component } from 'react';
import { Form,Col,Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class UserCreate extends Component {

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

        this.submit = this.submit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    submit(e) {
        e.preventDefault();
        console.log('Submit user add form');
        console.log(this.state);

        this.props.history.push('/admin/users-read/:uid');
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    

    render() {
        return (
            <div className="container">
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" name="firstName" 
                                value={this.state.firstName} 
                                onChange={this.handleInputChange}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" name="lastName" 
                                value={this.state.lastName} 
                                onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email"  name="email" 
                                value={this.state.email} 
                                onChange={this.handleInputChange}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" 
                                value={this.state.password} 
                                onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Street</Form.Label>
                                <Form.Control type="text" name="street" 
                                value={this.state.street} 
                                onChange={this.handleInputChange}/>
                            </Form.Group>

                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Street 2</Form.Label>
                                <Form.Control type="text" name="street2" 
                                value={this.state.street2} 
                                onChange={this.handleInputChange}/>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" name="city" 
                                value={this.state.city} 
                                onChange={this.handleInputChange}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" name="state" 
                                value={this.state.state} 
                                onChange={this.handleInputChange}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control type="text" name="zipcode" 
                                value={this.state.zipcode} 
                                onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Form.Row>

                            <Button variant="primary" type="button"  onClick={this.submit}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

export default UserCreate;