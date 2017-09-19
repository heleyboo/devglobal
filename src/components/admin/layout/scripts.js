import React from 'react';
import Script from 'react-load-script'
export default class Scrips extends React.Component {

    render() {
        return (
            <div>
                <Script url='https://adminlte.io/themes/AdminLTE/bower_components/bootstrap/dist/js/bootstrap.min.js'/>
                <Script url='https://adminlte.io/themes/AdminLTE/bower_components/jquery-slimscroll/jquery.slimscroll.min.js'/>
                <Script url='https://adminlte.io/themes/AdminLTE/bower_components/fastclick/lib/fastclick.js'/>
                <Script url='https://adminlte.io/themes/AdminLTE/dist/js/adminlte.min.js'/>
                <Script url='https://adminlte.io/themes/AdminLTE/dist/js/demo.js'/>
            </div>
        )
    }
}