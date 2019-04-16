import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    
        this.add = this.add.bind(this);
    }

    add(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        this.props.history.push('/admin/products-add/:uid');
    }

    

    render() {
        return (
            <div className="container">
                <br/>
                <div className="row">
                    <div className="col-sm-11">
                    </div>
                    <div className="col-sm-1">
                        <button type="button" className="btn btn-outline-primary" onClick={this.add}>Add</button>
                    </div>
                </div>
                <br/>
                <Table responsive="sm">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Roles</th>
                    <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><Link to="/admin/products-update/:uid">1</Link></td>
                    <td>Folau</td>
                    <td>Kaveinga</td>
                    <td>folaukaveinga@gmail.com</td>
                    <td>3109934731</td>
                    <td>USER,ADMIN,MANAGER</td>
                    <td>4849 w 111th street, Inglewood, CA, 90304</td>
                    </tr>
                    
                </tbody>
                </Table>
            </div>
        )
    }
}

export default Products;