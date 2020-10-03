import React from "react";

const HomeContact = () => {
    return (

<div>



<section className="subpage-bg">
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="titile-block title-block_subpage">
          <h2>Contact Us</h2>
          <p><a href="index.html"> Home</a> / Contact</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="main-block">
  <div className="container-fluid">
    <div className="row justify-content-center mb-5">
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-6">
            <div className="address-box">
              <span className="ti-location-pin"></span>
              <h5>USA Office</h5>
              <p>503 Sylvan Ave, Mountain View<br/> CA 94041, United States</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="address-box">
              <span className="ti-location-pin"></span>
              <h5>UK Office</h5>
              <p>22 Baker Street, London <br/> United Kingdom, W1U 3BW</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3 className="text-center pt-5 mb-5">Send us a Message</h3>
    <div className="row no-gutters justify-content-center">

      <div className="col-md-10 gray">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-form pl-4 py-4">

              <form action="php/contact.php" id="phpcontactform" method="post">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name" className="form-control"/>
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" name="email" className="form-control"/>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" name="subject" className="form-control"/>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" className="form-control" rows="3"></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn-submit" id="js-contact-btn">SEND MESSAGE</button>
                </div>
                <div id="js-contact-result" data-success-msg="Success, We will get back to you soon"
                  data-error-msg="Oops! Something went wrong"></div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            
            <div id="map" className="contact-map" data-lat="40.674" data-lon="-73.945" data-zoom="12"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




</div>

);
};

export default HomeContact;