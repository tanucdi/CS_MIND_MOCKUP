import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-contact">
                <h3>CS MIND</h3>
                <p>
                  <strong>Phone:</strong> +91 MOBILE NUMBER
                  <br />
                  <strong>Email:</strong> info@csmind.in
                  <br />
                </p>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>USEFUL LINKS</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="/">Home</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="/about">About us</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Vision</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Mission</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Policy</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>OUR SERVICES</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Innovations at CS MIND</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Aim at CS MIND</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">3C at CS MIND</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Consultancy Service..</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Sign For the Future</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Folks Behind CS MIND</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="copyright-wrap d-md-flex py-4">
            <div class="mr-md-auto text-center text-md-left">
              <div class="copyright">
                &copy; Copyright{" "}
                <strong>
                  <span>CS MIND</span>
                </strong>
                .<br /> All Rights Reserved
              </div>
              <div class="credits">
                Designed By |{" "}
                <a href="https://www.moonsitesolutions.tech/">
                  MOONSITE SOLUTIONS
                </a>
              </div>
            </div>
            <div class="social-links text-center text-md-right pt-3 pt-md-0">
              <a href="#" class="twitter">
                <i class="bx bxl-twitter"></i>
              </a>
              <a href="#" class="email">
                <i class="bx bxl-skype"></i>
              </a>
              <a href="#" class="facebook">
                <i class="bx bxl-facebook"></i>
              </a>
              <a href="" class="instagram">
                <i class="bx bxl-instagram"></i>
              </a>
              <a href="" class="linkedin">
                <i class="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
