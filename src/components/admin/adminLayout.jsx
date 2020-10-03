import '@progress/kendo-theme-bootstrap/dist/all.css';
import '../../css/adminLayout.css';
import {
    Link,
    Redirect,
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import React from "react";
import { RouteWithSubRoutes } from '../my-routes';
import { authService } from '../services/home/authService';


class AdminLayout extends React.Component{
    
    constructor(){
        super();

        if (window.performance) {
            if (performance.navigation.type == 1) {
              authService.refreshToken();
            }
          }
    }

    componentDidMount() {
        
        debugger;
        let userx = authService.userValue;

        const script = document.createElement("script");
        script.src = "../assets/js/dashboard.js";
        script.async = true;
        document.body.appendChild(script);
    }


// const AdminLayout = ({ routes }) => {
//     return (

    render() {
        
        const {routes} = this.props;

        return (
            <>


        <div className="wrapper">
    
        <nav id="sidebar">
            <div className="sidebar-header">
                <div>Bootstrap Sidebar</div>
            </div>
    
            <ul className="list-unstyled components">
                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                        <Link className="nav-item nav-link" to="/admin/index">
                            Home
                         </Link>
                        </li>
                    </ul>
                </li>
                
                <li className="">
                    <a href="#Submenu1" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Users</a>
                    <ul className="collapse list-unstyled" id="Submenu1">
                        <li>
                        <Link className="nav-item nav-link" to="/admin/users">
                            Users
                         </Link>
                        </li>
                        <li>
                        <Link className="nav-item nav-link" to="/admin/courses">
                            Counter
                         </Link>
                        </li>
                    </ul>
                </li>

                <li className="">
                    <a href="#Submenu2" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Services</a>
                    <ul className="collapse list-unstyled" id="Submenu2">
                        <li>
                        <Link className="nav-item nav-link" to="/admin/class">
                          class
                         </Link>
                        </li>
                    </ul>
                </li>

                <li className="">
                    <a href="#Submenu3" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Tickets</a>
                    <ul className="collapse list-unstyled" id="Submenu3">
                        <li>
                        <Link className="nav-item nav-link" to="/admin/users">
                            item 1
                         </Link>
                        </li>
                    </ul>
                </li>

                
            </ul>
        </nav>
    
        
        <div id="content">
    
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
    
                    <button type="button" id="sidebarCollapse" className="navbar-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Page</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        
    
            <Switch>
            {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
            ))}
            </Switch>
            {/* <Redirect from="/admin" to="/admin/index"/> */}
    
    
    
            </div>
    </div>

 </>
    );
  }
}

export default AdminLayout;