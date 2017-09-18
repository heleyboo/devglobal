import React from 'react'

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-static-top">
                <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </a>

                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li className="dropdown messages-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-envelope-o"></i>
                            <span className="label label-success">4</span>
                            </a>
                            <ul className="dropdown-menu">
                            <li className="header">You have 4 messages</li>
                            <li>
                                <ul className="menu">
                                <li>
                                    <a href="#">
                                    <div className="pull-left">
                                        <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                                    </div>
                                    <h4>
                                        Support Team
                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                    </h4>
                                    <p>Why not buy a new awesome theme?</p>
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="footer"><a href="#">See All Messages</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}