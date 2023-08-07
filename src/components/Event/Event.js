/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Event.css";
import Link from "../Link";

import EventCard from "../EventCard/EventCard";

class Event extends React.Component {
  static propTypes = {
    value: PropTypes.number
  };

  static defaultProps = {
    value: 3
  };

  render() {
    const { value } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.eventHeader}>
            <h1 className={s.eventHeaderTitle}>Events</h1>
            <div className={s.eventHeaderButton}>
              <Link to="/">EXPLORE ALL EVENTS</Link>
            </div>
          </div>
          {value === 0 ? (
            <div className={cx(s.eventNotAvailable, s.Down)}>
              <div className={s.eventNotAvailableContents}>
                <h2>
                  There&rsquo;s no<br />upcoming event.
                </h2>
                <h4>
                  Don&rsquo;t miss any upcoming event! Get Qubicle in your Inbox
                  now!
                </h4>
                <form className={s.subscribeInput}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                  />
                  <button type="submit">SUBSCRIBE</button>
                </form>
              </div>
            </div>
          ) : (
            <div>
              <EventCard
                thumbnail="https://marketplace.canva.com/MACdCzgbkDs/1/0/thumbnail_large/canva-orange-music-vinyl-music-event-poster-MACdCzgbkDs.jpg"
                date="7"
                month="dec"
                title="Eleanor Sanders"
                brandName="Traya Indonesia"
                place="JCC - Jakarta"
              />
              {value === 1 ? null : (
                <EventCard
                  thumbnail="https://marketplace.canva.com/MACcZqwhNdE/3/0/thumbnail_large/canva-blue-green-festival-event-poster-MACcZqwhNdE.jpg"
                  date="8"
                  month="dec"
                  title="SPLASH Art Festival"
                  brandName="Art University Of Morrison"
                  place="JIExpo - Jakarta"
                />
              )}
              {value === 1 || value === 2 ? null : (
                <EventCard
                  thumbnail="https://i.pinimg.com/originals/9f/db/8a/9fdb8ae2d5ccd0bfefbf170cc101e1e7.jpg"
                  date="14"
                  month="dec"
                  title="TOBE SOFT with YOU"
                  brandName="TOBESOFT"
                  place="ICE - BSD"
                />
              )}
              {value === 1 || value === 2 ? (
                <div className={cx(s.eventNotAvailable, s.Up)}>
                  <div className={s.eventNotAvailableContents}>
                    <h4>
                      Don&rsquo;t miss any upcoming event! Get Qubicle in your
                      Inbox now!
                    </h4>
                    <form className={s.subscribeInput}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email address"
                      />
                      <button type="submit">SUBSCRIBE</button>
                    </form>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Event);
