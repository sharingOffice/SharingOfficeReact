import "bootstrap/dist/css/bootstrap.css";
import '../../css/set1.css';
import '../../css/style.css';

import {
    Link,
    Redirect,
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import React from "react";
import { RouteWithSubRoutes } from '../my-routes';

const HomeLayout = ({ routes }) => {
    return (

<div>


<div className="nav-menu sticky-top">
  <div className="bg transition">
    <div className="container-fluid fixed">
      <div className="row">
        <div className="col-md-12">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="index.html"><img src="./assets/home/images/logo.png" alt="logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="ti-menu"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul className="navbar-nav">

                <li className="nav-item">
                    <a className="nav-item nav-link" href="/admin/index">Dashboard</a>
                </li>

                <li className="nav-item">
                  <Link className="nav-item nav-link" to="/about">
                  About
                    <span className="sr-only">(current)</span>
                    </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-item nav-link" to="/contact">
                    Contact
                    <span className="sr-only">(current)</span>
                    </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-item nav-link" to="/price">
                    Price
                    <span className="sr-only">(current)</span>
                    </Link>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Blog
                    <span className="ti-angle-down"></span>
                  </a>
                  <div className="dropdown-menu">
                   
                    <Link className="nav-item nav-link" to="/blog">
                    Blog Listing
                    <span className="sr-only">(current)</span>
                    </Link>
                    
                    <a className="dropdown-item" >Blog Detail</a>
                  </div>
                </li>
                <li className="nav-item" to="/blog">
                    <Link className="nav-item nav-link" to="/signin">
                      Login
                    </Link>
                </li>
                <li><a href="add-listing.html" className="btn btn-outline-danger top-btn"><span className="ti-plus"></span> Add
                    Listing</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>


<Switch>
{routes.map((route, i) => (
<RouteWithSubRoutes key={i} {...route} />
))}
</Switch>
<Redirect from="/" to="/index"/>


<footer className="main-block gray">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4 responsive-wrap">
        <div className="location">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <p>503 Sylvan Ave, Mountain View<br/> CA 94041, United States</p>
        </div>
      </div>
      <div className="col-md-4 responsive-wrap">
        <div className="footer-logo_wrap">
          <img src="assets/home/images/footer-logo.png" alt="#" className="img-fluid"/>
        </div>
      </div>
      <div className="col-md-4 responsive-wrap">
        <ul className="social-icons">
          <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-12">
        <div className="copyright">
          <p>Copyright © 2017 Listed Inc. All rights reserved</p>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  </div>
</footer>
</div>

);
};

export default HomeLayout;