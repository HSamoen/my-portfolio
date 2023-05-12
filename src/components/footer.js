import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <>
      <section className="contact-area" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-content text-center">
                <h4> Thank you for viewing my portfolio, feel free to reach out for any questions! </h4>
                <a href="#aboutme"><img src="https://i.ibb.co/KmZyq2K/signature.png" alt="logo" /></a>
                <div className="hr"></div>
                <h5>Contact Information:</h5>
                <h6>ebansamoen@gmail.com<span>|</span>(704) 421-0849<span>|</span>Charlotte, NC</h6>
                <div className="contact-social">
                  <ul>
                    <li><a href="https://github.com/HSamoen" target="_blank"><img src="https://i.ibb.co/cNhZzfC/github-icon-removebg-preview.png" style={{ width: "100%", marginTop: "15px", marginRight: "5px" }}></img></a></li>
                    <li><a href="https://www.linkedin.com/in/hsamoen-eban/" target="_blank"><img src="https://i.ibb.co/hYx87Yg/linkedin-removebg-preview.png" style={{ width: "90%", marginTop: "18px" }} alt="" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p className='footer'>&copy; 2023 <img src="https://i.ibb.co/KmZyq2K/signature.png" alt="logo" /> All Rights Reserved.</p>
          <p className='footer'>last updated: May 12th, 2023</p>
        </div>
      </section>
    </>
  );
}

export default Footer;
