import React from 'react'

import Nav from '../../../components/admin/layout/nav.js';

export default class Header extends React.Component {
    render() {
        return (
            <header className="main-header">
                <a href="../../index2.html" className="logo">
                <span className="logo-mini"><b>A</b>LT</span>
                <span className="logo-lg"><b>Admin</b>LTE</span>
                </a>
                <Nav/>
            </header>
        )
    }
}