import React, {Component} from 'react';
import Scripts from '../admin/layout/scripts.js';
import '../../../public/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../../../public/bower_components/font-awesome/css/font-awesome.min.css';
import '../../../public/bower_components/Ionicons/css/ionicons.min.css';
import '../../../public/dist/css/AdminLTE.css';
import '../../../public/plugins/iCheck/square/blue.css';
import $ from 'jquery';

import Script from 'react-load-script';

export default class Signup extends Component {
    componentDidMount() {
        document.body.classList.add('hold-transition', 'register-page');
        window.jQuery = $;
        window.$ = $;
        global.jQuery = $;
    }
    render() {
        return  (
            <div>
                <div className="register-box">
                    <div className="register-logo">
                        <a href="../../index2.html"><b>Admin</b>LTE</a>
                    </div>

                    <div className="register-box-body">
                        <p className="login-box-msg">Register a new membership</p>

                        <form action="../../index.html" method="post">
                            <div className="form-group has-feedback">
                                <input type="text" className="form-control" placeholder="Full name"/>
                                <span className="glyphicon glyphicon-user form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="email" className="form-control" placeholder="Email"/>
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" className="form-control" placeholder="Password"/>
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" className="form-control" placeholder="Retype password"/>
                                <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
                            </div>
                            <div className="row">
                                <div className="col-xs-8">
                                <div className="checkbox icheck">
                                    <label>
                                    <input type="checkbox"/> I agree to the <a href="#">terms</a>
                                    </label>
                                </div>
                                </div>
                                <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
                                </div>
                            </div>
                        </form>

                        <div className="social-auth-links text-center">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign up using
                            Facebook</a>
                        <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign up using
                            Google+</a>
                        </div>

                        <a href="login.html" className="text-center">I already have a membership</a>
                    </div>
                </div>
                <Scripts/>
                <Script url='https://adminlte.io/themes/AdminLTE/plugins/iCheck/icheck.min.js'/>
            </div>
        )
    }
}