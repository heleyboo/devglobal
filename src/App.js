import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Script from 'react-load-script'

import Header from './components/admin/layout/header.js';
import Sidebar from './components/admin/layout/sidebar.js';

import '../public/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../public/bower_components/font-awesome/css/font-awesome.min.css';
import '../public/bower_components/Ionicons/css/ionicons.min.css';
import '../public/dist/css/AdminLTE.css';
import '../public/dist/css/skins/_all-skins.min.css';
import $ from 'jquery';
import Signup from './components/screens/signup.js';
import Login from './components/screens/login.js';
import Home from './components/screens/home.js';

class App extends Component {

  componentDidMount() {
    // document.body.classList.add('hold-transition', 'skin-blue', 'sidebar-mini');
    // document.getElementById('root').classList.add('wrapper');
    // // var script = document.createElement('script');
    // // script.src = 'https://adminlte.io/themes/AdminLTE/bower_components/jquery/dist/jquery.min.js';
    // // script.async = true;
    // // document.body.appendChild(script);
    window.jQuery = $;
    window.$ = $;
    global.jQuery = $;
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={Signup}/>
        <Route path="/login" component={Login}/>
      </div>
      // <Redirect  to='/dashboard'/>

    );
  }
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export default App;