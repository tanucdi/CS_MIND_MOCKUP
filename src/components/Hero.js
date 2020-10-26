import React from "react";
import Stats from "./Stats";

const Hero = () => {
  return (
    <main>
      <div class="body-overlay"></div>
      <div class="sec sec-2">
        <div class="wrapper">
          <section id="about" class="cta">
            <div class="cta-info">
              <div class="cta-text">
                <h1 class="cta-text-header">
                  Have everything be easy with <span>LaslesVPN.</span>
                </h1>
                <p class="cta-text-desc sub-desc">
                  Provide a network for all your needs with ease and fun using
                  <span>LaslesVPN</span> and discover interesting features from
                  us.
                </p>
              </div>
              <div class="cta-btn-ctr">
                <button class="cta-btn btn-dark">Get Started</button>
              </div>
            </div>
            <div class="cta-img-ctr">
              <img src="media/cta-img.svg" />
            </div>
          </section>
          <Stats />
          <section id="features" class="features">
            <div class="features-img-ctr">
              <img src="media/features-img.svg" />
            </div>
            <div class="features-text">
              <h2 class="feature-header sub-heading">
                We Provide Many Features You Can Use
              </h2>
              <p class="feature-desc sub-desc">
                Have fun exploring the features that we provide and see all the
                functions each feature has.
              </p>
              <ul class="feature-list">
                <li class="feature-list-item">
                  <span>
                    <img src="media/feature-check.svg" />
                  </span>
                  Powerful online protection.
                </li>
                <li class="feature-list-item">
                  <span>
                    <img src="media/feature-check.svg" />
                  </span>
                  Internet without borders.
                </li>
                <li class="feature-list-item">
                  <span>
                    <img src="media/feature-check.svg" />
                  </span>
                  Supercharged VPN
                </li>
                <li class="feature-list-item">
                  <span>
                    <img src="media/feature-check.svg" />
                  </span>
                  No specific time limits.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Hero;
