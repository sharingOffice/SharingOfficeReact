import '../../images/about/css/magnific-popup.css';
import '../../images/about/css/swiper.min.css';

import React from "react";
import avatar from '../../images/about/images/avatar.jpg';
import customerimg1 from '../../images/about/images/customer-img1.jpg';
import feat_slide1 from '../../images/about/images/feat_slide1.jpg';
import feat_slide2 from '../../images/about/images/feat_slide2.jpg';
import feat_slide3 from '../../images/about/images/feat_slide3.jpg';
import followimg from '../../images/about/images/follow-img.jpg';
import map from '../../images/about/images/map.jpg';
import reviewimg1 from '../../images/about/images/review-img1.jpg';
import reviewimg2 from '../../images/about/images/review-img2.jpg';
import reviewimg3 from '../../images/about/images/review-img3.jpg';

const HomePrice = () => {
    return (

<div>

<section className="subpage-bg">
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="titile-block title-block_subpage">
          <h2>Pricing</h2>
          <p> <a href="index.html"> Home</a> / Pricing</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="main-block">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-3 article-first">
        <div className="pricing-wrap">
          <div className="pricing-head">
            <h2>$20</h2>
            <span>Basic</span>
          </div>
          <ul className="pricing-text-block">
            <li>15 days listing</li>
            <li>1 GB Storage</li>
            <li>Export User data</li>
            <li>Add photos &amp; videos</li>
          </ul>
          <div className="pricing-signup">
            <a href="#" className="btn btn-danger">Sign up</a>
          </div>
        </div>
      </div>
      <div className="col-md-3 article-first">
        <div className="pricing-wrap">
          <div className="pricing-head">
            <h2>$30</h2>
            <span>Standard</span>
          </div>
          <ul className="pricing-text-block">
            <li>30 days listing</li>
            <li>10 GB Storage</li>
            <li>Free Reservation</li>
            <li>Unlimited photos &amp; videos</li>
          </ul>
          <div className="pricing-signup">
            <a href="#" className="btn btn-danger">Sign up</a>
          </div>
        </div>
      </div>
      <div className="col-md-3 article-first">
        <div className="pricing-wrap">
          <div className="pricing-head">
            <h2>$40</h2>
            <span>Professional</span>
          </div>
          <ul className="pricing-text-block">
            <li>6 month listing</li>
            <li>Unlimited Storage</li>
            <li>Priority Support</li>
            <li>Increased Searh ranking</li>
          </ul>
          <div className="pricing-signup">
            <a href="#" className="btn btn-danger">Sign up</a>
          </div>
        </div>
      </div>
      <div className="col-md-3 article-first">
        <div className="pricing-wrap">
          <div className="pricing-head">
            <h2>$50</h2>
            <span>Ultimate</span>
          </div>
          <ul className="pricing-text-block">
            <li>Unlimited listing</li>
            <li>Unlimited Storage</li>
            <li>Dedicated Phone Support</li>
            <li>Sponsored Display</li>
          </ul>
          <div className="pricing-signup">
            <a href="#" className="btn btn-danger">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



</div>

);
};

export default HomePrice;