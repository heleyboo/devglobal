import React, {Component} from 'react';
import Scripts from '../admin/layout/scripts.js';
import '../../../public/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../../../public/bower_components/font-awesome/css/font-awesome.min.css';
import '../../../public/bower_components/Ionicons/css/ionicons.min.css';
import '../../../public/dist/css/AdminLTE.css';
import '../../../public/plugins/iCheck/square/blue.css';
import $ from 'jquery';
import axios from 'axios';

import Script from 'react-load-script';
import { withRouter } from 'react-router';
import Home from '../../components/screens/home.js';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
  } from 'react-router-dom'

export default class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tenantId: '',
            email: '',
            password: '',
            loginSuccess: false
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        document.body.classList.add('hold-transition', 'login-page');
        window.jQuery = $;
        window.$ = $;
        global.jQuery = $;
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        
        axios.post('http://localhost:4000/login', {
            tenantId: this.state.tenantId,
            email: this.state.email,
            password: this.state.password
        })
        .then(function (response) {
            if (response.data.success) {
                this.state.setState({loginSuccess: true});
            }
        })
        .catch(function (error) {
            console.log(error);
        });
        
        event.preventDefault();
    }
    
    render() {
        if (this.state.loginSuccess) {
            return (
                <Redirect to="/"/>
            )
        }
        return  (
            <div>
                <div className="register-box">
                    <div className="register-logo">
                        <a href="../../index2.html"><b>Admin</b>LTE</a>
                    </div>

                    <div className="register-box-body">
                        <p className="login-box-msg">Login</p>

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group has-feedback">
                                <input type="text" className="form-control" placeholder="Tenant ID" name="tenantId"
                                    value={this.state.tenantId} onChange={this.handleInputChange}/>
                                <span className="glyphicon glyphicon-user form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="email" className="form-control" placeholder="Email" name="email" 
                                value={this.state.email} onChange={this.handleInputChange} />
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" className="form-control" placeholder="Password" name="password" 
                                value={this.state.password} onChange={this.handleInputChange}/>
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <button type="submit" className="btn btn-block btn-primary btn-block btn-flat">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Scripts/>
            </div>
        )
    }
}