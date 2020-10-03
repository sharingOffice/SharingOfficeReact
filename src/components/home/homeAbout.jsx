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

const HomeAbout = () => {
    return (

<div>

<div>
  <div className="swiper-container">
    <div className="swiper-wrapper">

      <div className="swiper-slide">
        <a href="" className="grid image-link">
          <img src={feat_slide1} className="img-fluid" alt="#"/>
        </a>
      </div>
      <div className="swiper-slide">
        <a href="" className="grid image-link">
          <img src={feat_slide2} className="img-fluid" alt="#"/>
        </a>
      </div>
      <div className="swiper-slide">
        <a href="" className="grid image-link">
          <img src={feat_slide3} className="img-fluid" alt="#"/>
        </a>
      </div>

    </div>

    <div className="swiper-pagination swiper-pagination-white"></div>

    <div className="swiper-button-next swiper-button-white"></div>
    <div className="swiper-button-prev swiper-button-white"></div>
  </div>
</div>

<section className="reserve-block">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h5>Tasty Hand-Pulled Noodles</h5>
        <p><span>$$$</span>$$</p>
        <p className="reserve-description">Innovative cooking, paired with fine wines in a modern setting.</p>
      </div>
      <div className="col-md-6">
        <div className="reserve-seat-block">
          <div className="reserve-rating mx-0 mx-md-3">
            <span>9.5</span>
          </div>
          <div className="reserve-btn">
            <div className="featured-btn-wrap">
              <a href="#" className="btn btn-danger">RESERVE A SEAT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="gray-dark booking-details_wrap">
  <div className="container">
    <div className="row">
      <div className="col-md-8 responsive-wrap">
        <div className="booking-checkbox_wrap">
          <div className="booking-checkbox">
            <p>Tasty Hand-Pulled Noodles is a 1950s style diner located in Madison, Wisconsin. Opened in 1946 by Mickey
              Weidman, and located just across the street from Camp Randall Stadium, it has become a popular game day
              tradition amongst
              many Badger fans. The diner is well known for its breakfast selections, especially the Scrambler, which is
              a large mound of potatoes, eggs, cheese, gravy, and a patrons’ choice of other toppings.</p>
            <p>Mickies has also been featured on “Todd’s Taste of the Town” during one of ESPN’s college football
              broadcasts. We are one of the best Chinese restaurants in the New York, New York area. We have been
              recognized for our outstanding
              Chinese & Asian cuisine, excellent Chinese menu, and great restaurant specials. We are one of the best
              Chinese restaurants in the New York, New York area. We have been recognized for our outstanding Chinese &
              Asian cuisine,
              excellent Chinese menu, and great restaurant specials.</p>
            <hr/>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label className="custom-checkbox">
                <span className="ti-check-box"></span>
                <span className="custom-control-description">Bike Parking</span>
              </label>
              <label className="custom-checkbox">
                <span className="ti-check-box"></span>
                <span className="custom-control-description">Wireless Internet </span>
              </label>
            </div>
            <div className="col-md-4">
              <label className="custom-checkbox">
                <span className="ti-check-box"></span>
                <span className="custom-control-description">Smoking Allowed </span>
              </label>
              <label className="custom-checkbox">
                <span className="ti-check-box"></span>
                <span className="custom-control-description">Street Parking</span>
              </label>
            </div>
            <div className="col-md-4">
              <label className="custom-checkbox">
                <span className="ti-check-box"></span>
                <span className="custom-control-description">Special</span>
              </label>
              <label className="custom-checkbox">
                <span className="ti-check-box"></span>
                <span className="custom-control-description">Accepts Credit cards</span>
              </label>
            </div>
          </div>
        </div>
        <div className="booking-checkbox_wrap booking-your-review">
          <h5>Write a Review</h5>
          <hr/>
          <div className="customer-review_wrap">
            <div className="customer-img">
              <img src={avatar} className="img-fluid" alt="#"/>
            </div>
            <div className="customer-content-wrap">
              <div className="your-rating-wrap">
                <span>Your rating</span>
                <div className="customer-review">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="round-icon-blank"></span>
                </div>
              </div>
              <div className="your-comment-wrap">
                <textarea name="#" className="your-rating-content" placeholder="Enter Your Comments"></textarea>
                <h6 className="your-rating-notify">at least 140 characters</h6>
              </div>

              <div className="row">
                <div className="col-md-4 mr-auto">
                  <div className="add-photos-link mb-3 mb-md-0">
                    <a href="#"><i className="icon-picture"></i>Add Photos</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="your-rating-btn">
                    <a href="#" className="btn btn-danger btn-block">Publish Review</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="booking-checkbox_wrap my-4">
          <h4>34 Reviews</h4>
          <hr/>
          <div className="customer-review_wrap">
            <div className="customer-img">
              <img src={customerimg1} className="img-fluid" alt="#"/>
              <p>Amanda G</p>
              <span>35 Reviews</span>
            </div>
            <div className="customer-content-wrap">
              <div className="customer-content">
                <div className="customer-review">
                  <h5>Best noodles in the Newyork city</h5>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="round-icon-blank"></span>
                  <p>Reviewed 2 days ago</p>
                </div>
                <div className="customer-rating">8.0</div>
              </div>
              <p className="customer-text">I love the noodles here but it is so rare that I get to come here. Tasty
                Hand-Pulled Noodles is the best type of whole in the wall restaurant. The staff are really nice, and you
                should be seated quickly. I usually get the
                hand pulled noodles in a soup. House Special #1 is amazing and the lamb noodles are also great. If you
                want your noodles a little chewier, get the knife cut noodles, which are also amazing. Their dumplings
                are great
                dipped in their chili sauce. </p>
              <p className="customer-text">I love how you can see into the kitchen and watch them make the noodles and you
                can definitely tell that this is a family run establishment. The prices are are great with one dish
                maybe being $9. You just have to remember
                to bring cash.</p>
              <ul>
                <li><img src={reviewimg1} className="img-fluid" alt="#"/></li>
                <li><img src={reviewimg2} className="img-fluid" alt="#"/></li>
                <li><img src={reviewimg3} className="img-fluid" alt="#"/></li>
              </ul>
              <span>28 people marked this review as helpful</span>
              <a href="#"><span className="icon-like"></span>Helpful</a>
            </div>
          </div>
          <hr/>
          <div className="customer-review_wrap">
            <div className="customer-img">
              <img src="../../../assets/detail/images/customer-img2.jpg" className="img-fluid" alt="#"/>
              <p>Kevin W</p>
              <span>17 Reviews</span>
            </div>
            <div className="customer-content-wrap">
              <div className="customer-content">
                <div className="customer-review">
                  <h5>A hole-in-the-wall old school shop.</h5>
                  <span className="customer-rating-red"></span>
                  <span className="round-icon-blank"></span>
                  <span className="round-icon-blank"></span>
                  <span className="round-icon-blank"></span>
                  <span className="round-icon-blank"></span>
                  <p>Reviewed 3 months ago</p>
                </div>
                <div className="customer-rating customer-rating-red">2.0</div>
              </div>
              <p className="customer-text">The dumplings were so greasy...the pan-fried shrimp noodles were the same. So
                much oil and grease it was difficult to eat. The shrimp noodles only come with 3 shrimp (luckily the
                dish itself is cheap) </p>
              <p className="customer-text">The beef noodle soup was okay. I added black vinegar into the broth to give it
                some extra flavor. The soup has bok choy which I liked - it's a nice textural element. The shop itself
                is really unclean (which is the case
                in many restaurants in Chinatown) They don't wipe down the tables after customers have eaten. If you
                peak into the kitchen many of their supplies are on the ground which is unsettling... </p>
              <span>10 people marked this review as helpful</span>
              <a href="#"><span className="icon-like"></span>Helpful</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 responsive-wrap">
        <div className="contact-info">
          <img src={map} className="img-fluid" alt="#"/>
          <div className="address">
            <span className="icon-location-pin"></span>
            <p> Doyers St <br/> New York, NY 10013<br/>b/t Division St  St James Pl <br/> Chinatown, Civic Center</p>
          </div>
          <div className="address">
            <span className="icon-screen-smartphone"></span>
            <p> +44 20 7336 8898</p>
          </div>
          <div className="address">
            <span className="icon-link"></span>
            <p>https://burgerandlobster.com</p>
          </div>
          <div className="address">
            <span className="icon-clock"></span>
            <p>Mon - Sun 09:30 am - 05:30 pm </p>
            <a href="#" className="featured-open">OPEN NOW</a>
          </div>
          <a href="#" className="btn btn-outline-danger btn-contact">SEND A MESSAGE</a>
        </div>
        <div className="follow">
          <div className="follow-img">
            <img src={followimg} className="img-fluid" alt="#"/>
            <h6>Christine Evans</h6>
            <span>New York</span>
          </div>
          <ul className="d-flex">
            <li className=" flex-fill">
              <h6>76</h6>
              <span>followers</span>
            </li>
            <li className=" flex-fill">
              <h6>42</h6>
              <span>following</span>
            </li>
            <li className=" flex-fill">
              <h6>26</h6>
              <span>Listings</span>
            </li>
          </ul>
          <a href="#">FOLLOW</a>
        </div>
      </div>
    </div>
  </div>
</section>

</div>

);
};

export default HomeAbout;