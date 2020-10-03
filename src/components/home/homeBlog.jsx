import React from "react";
import { RouteWithSubRoutes } from '../my-routes';

const HomeBlog = ({ routes }) => {
    return (

<div>

<section className="subpage-bg">
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="titile-block title-block_subpage">
          <h2>Blog</h2>
          <p><a href="index.html"> Home</a> / Blog</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="main-block">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4">
        <div className="blog-wrap">
          <a href="#" className="blog-img">
            <img src="assets/blog/images/feat_slide2.jpg" className="img-fluid blog-img" alt="#"/>
          </a>
          <div className="blog-avatar">
            <img src="assets/blog/images/customer-img1.jpg" alt="#"/>
            <p>By Adam Khiwak </p>
          </div>
          <div className="blog-content_wrap">
            <a href="#" className="blog-title">
              <h5>Introducing zero commission</h5>
            </a>
            <p>Credibly benchmark scalable web-readiness via e-business users. Authoritatively fabricate cutting-edge
              potentialities and world-className relationships. Progressively redefine.</p>
            <a href="blog-detail.html">Read More ➝</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog-wrap">
          <a href="#" className="blog-img">
            <img src="assets/blog/images/feat_slide1.jpg" className="img-fluid blog-img" alt="#"/>
          </a>
          <div className="blog-avatar">
            <img src="assets/blog/images/customer-img2.jpg" alt="#"/>
            <p>By Adam Khiwak </p>
          </div>
          <div className="blog-content_wrap">
            <a href="#" className="blog-title">
              <h5>Helping new restaurateurs find their feet</h5>
            </a>
            <p>Enthusiastically visualize premier total linkage with optimal synergy. Enthusiastically envisioneer
              turnkey alignments before excellent outside the.</p>
            <a href="blog-detail.html">Read More ➝</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog-wrap">
          <a href="#" className="blog-img">
            <img src="assets/blog/images/feat_slide3.jpg" className="img-fluid blog-img" alt="#"/>
          </a>
          <div className="blog-avatar">
            <img src="assets/blog/images/customer-img2.jpg" alt="#"/>
            <p>By Adam Khiwak </p>
          </div>
          <div className="blog-content_wrap">
            <a href="#" className="blog-title">
              <h5> Introducing the Food Ratings</h5>
            </a>
            <p>Progressively foster client-focused sources through sustainable collaboration and idea-sharing.
              Seamlessly aggregate effective testing procedures rather than.</p>
            <a href="blog-detail.html">Read More ➝</a>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="blog-wrap">
          <a href="#" className="blog-img">
            <img src="assets/blog/images/feat_slide4.jpg" className="img-fluid blog-img" alt="#"/>
          </a>
          <div className="blog-avatar">
            <img src="assets/blog/images/customer-img2.jpg" alt="#"/>
            <p>By Adam Khiwak </p>
          </div>
          <div className="blog-content_wrap">
            <a href="#" className="blog-title">
              <h5>3 million orders in a month</h5>
            </a>
            <p>Authoritatively formulate synergistic benefits after error-free sources. Phosfluorescently facilitate
              out-of-the-box technologies via backward-compatible customer service. Quickly.</p>
            <a href="blog-detail.html">Read More ➝</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog-wrap">
          <a href="#" className="blog-img">
            <img src="assets/blog/images/feat_slide6.jpg" className="img-fluid blog-img" alt="#"/>
          </a>
          <div className="blog-avatar">
            <img src="assets/blog/images/customer-img1.jpg" alt="#"/>
            <p>By Adam Khiwak </p>
          </div>
          <div className="blog-content_wrap">
            <a href="#" className="blog-title">
              <h5>Life is short, eat dessert first</h5>
            </a>
            <p>Proactively promote top-line content rather than standards compliant information. Dramatically strategize
              team driven manufactured products through.</p>
            <a href="blog-detail.html">Read More ➝</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog-wrap">
          <a href="#" className="blog-img">
            <img src="assets/blog/images/feat_slide5.jpg" className="img-fluid blog-img" alt="#"/>
          </a>
          <div className="blog-avatar">
            <img src="assets/blog/images/customer-img2.jpg" alt="#"/>
            <p>By Adam Khiwak </p>
          </div>
          <div className="blog-content_wrap">
            <a href="#" className="blog-title">
              <h5>5 Easy Tips To Boost Your Sales</h5>
            </a>
            <p>Completely orchestrate fully tested solutions for customer directed applications. Monotonectally harness
              world-className information via excellent potentialities.</p>
            <a href="blog-detail.html">Read More ➝</a>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</section>
</div>

);
};

export default HomeBlog;