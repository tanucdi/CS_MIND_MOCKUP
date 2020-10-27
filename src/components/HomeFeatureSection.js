import React from 'react'

const HomeFeatureSection = () => {
    return (
        <section id="features" class="features">
            <div class="features-img-ctr">
              <img src="media/features-img.svg" alt="featires" />
            </div>
            <div class="features-text">
              <h2 class="feature-header sub-heading">
                Our Areas of Expertise
              </h2>
              <p class="feature-desc sub-desc">
                Have fun exploring the features that we provide and see all the
                functions each feature has.
              </p>
              <ul class="feature-list">
                <li class="feature-list-item">
                  <span>
                    <img src="media/book.svg" alt="book" />
                  </span>
                  Education,Research,Career
                </li>
                <li class="feature-list-item">
                  <span>
                    <img src="media/city.svg" alt="city" />
                  </span>
                  Smart Systems,Smart Cities
                </li>
                <li class="feature-list-item">
                  <span>
                    <img src="media/robot.svg" alt="robot" />
                  </span>
                  Robotics,Automation
                </li>
                <li class="feature-list-item">
                  <span>
                    <img src="media/healthcare.svg" alt="vdds" />
                  </span>
                  Healthcare,Knowledge Managment
                </li>
              </ul>
            </div>
          </section>
    )
}

export default HomeFeatureSection
