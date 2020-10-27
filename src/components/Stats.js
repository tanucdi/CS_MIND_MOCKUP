import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Stats = () => {
    return (
        <section class="stats">
            <div class="stats-item">
              <div class="stats-img-ctr">
                <img src="media/stats-user-icon.svg" alt='stats-img'/>
              </div>
              <div class="stats-text">
                <p class="text-num">
                <CountUp end={65}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    +</p>
                <p class="text-label">Users</p>
              </div>
            </div>
            <div class="stats-item">
              <div class="stats-img-ctr">
                <img src="media/stats-location-icon.svg" alt="localv" />
              </div>
              <div class="stats-text">
                <p class="text-num"><CountUp end={35}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>+</p>
                <p class="text-label">Locations</p>
              </div>
            </div>
            <div class="stats-item">
              <div class="stats-img-ctr">
                <img src="media/stats-server-icon.svg" alt="srddf"/>
              </div>
              <div class="stats-text">
                <p class="text-num"><CountUp end={15}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>+</p>
                <p class="text-label">Institutions</p>
              </div>
            </div>
          </section>
    )
}

export default Stats
