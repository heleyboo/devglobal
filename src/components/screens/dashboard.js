import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



import Header from './components/admin/layout/header.js';
import Sidebar from './components/admin/layout/sidebar.js';

import '../public/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../public/bower_components/font-awesome/css/font-awesome.min.css';
import '../public/bower_components/Ionicons/css/ionicons.min.css';
import '../public/dist/css/AdminLTE.css';
import '../public/dist/css/skins/_all-skins.min.css';
import $ from 'jquery';


export default class Dashboard extends React.Component {
    componentDidMount() {
        document.body.classList.add('hold-transition', 'skin-blue', 'sidebar-mini');
        document.getElementById('root').classList.add('wrapper');
        // var script = document.createElement('script');
        // script.src = 'https://adminlte.io/themes/AdminLTE/bower_components/jquery/dist/jquery.min.js';
        // script.async = true;
        // document.body.appendChild(script);
        window.jQuery = $;
        window.$ = $;
        global.jQuery = $;
    }

    render() {
        return (
            <div>
            <Header/>
            <Sidebar/>
            <div className='content-wrapper'>
                <section className='content-header'>
                <h1>
                    Blank page
                    <small>it all starts here</small>
                  </h1>
                  <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                    <li><a href="#">Examples</a></li>
                    <li className="active">Blank page</li>
                  </ol>
                </section>
                <section className="content-body">
    
                  <div className="box">
                    <div className="box-header with-border">
                      <h3 className="box-title">Title</h3>
    
                      <div className="box-tools pull-right">
                        <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                                title="Collapse">
                          <i className="fa fa-minus"></i></button>
                        <button type="button" className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                          <i className="fa fa-times"></i></button>
                      </div>
                    </div>
                    <div className="box-body">
                      Start creating your amazing application!
                    </div>
                    <div className="box-footer">
                      Footer
                    </div>
                  </div>
                  
                </section>
                
            </div>
    
            <footer className="main-footer">
              <div className="pull-right hidden-xs">
                <b>Version</b> 2.4.0
              </div>
              <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights
              reserved.
              
            </footer>
          </div>
        )
    }
}