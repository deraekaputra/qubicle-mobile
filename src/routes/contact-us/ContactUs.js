/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./ContactUs.css";
import Link from "../../components/Link";

class ContactUs extends React.Component {
  state = {
    isAllFilled: true,
    isSent: true
  };

  handleChange = () => {
    this.setState({
      isAllFilled: false
    });
  };

  handleSumbit = () => {
    this.setState({
      isSent: true
    });
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.hero}>
          <div className={s.heroTitle}>
            <div className={s.container}>
              <h1 className={s.title}>
                <span>
                  Your voice matters{" "}
                  <span role="img" aria-label="cheering megaphone">
                    📣
                  </span>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className={s.contents}>
          <div className={s.contentsBorder} />
          <div className={s.container}>
            <Link to="mailto:hi@qubicle.id" className={s.contactCover}>
              <span className={s.contactCoverText}>hi@qubicle.id</span>
              <img
                className={s.contactCoverImage}
                src="https://66.media.tumblr.com/2115e2a1242ccff91ef6750655d3443c/tumblr_mnydh5zjt11sutmfto3_r1_400.gif"
                alt="contact qubicle"
              />
            </Link>
            <div className={s.contactContent}>
              <h1>We are better because of you</h1>
              <p>
                Got burning questions? Aching to magnify an idea? Want to give
                us feedback? Or interested in a partnership? As we strive to
                continuously create better content and amplify stories from
                individuals and communities, we feel it essential to hear what
                you have to say. Feel free to send us your questions, thoughts,
                or propositions by filling out the form
              </p>
              <div className={s.contentsDivider}>
                <svg width="25" height="5">
                  <path
                    d="M22.5 5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-10 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-10 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
                    fill="#4A4A4A"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
            <div className={s.contactForm}>
              <form>
                <div className={s.formGroup}>
                  <span className={s.formLabel}>Name</span>
                  <input
                    className={cx(
                      s.formInput,
                      this.state.isAllFilled ? s.error : ""
                    )}
                    type="text"
                    id="name"
                  />
                  {this.state.isAllFilled ? (
                    <span className={cx(s.formAlert, s.error)}>
                      Please fill your name*
                    </span>
                  ) : null}
                </div>
                <div className={s.formGroup}>
                  <span className={s.formLabel}>Email</span>
                  <input
                    className={cx(
                      s.formInput,
                      this.state.isAllFilled ? s.error : ""
                    )}
                    type="email"
                    id="email"
                  />
                  {this.state.isAllFilled ? (
                    <span className={cx(s.formAlert, s.error)}>
                      Please fill your email**
                    </span>
                  ) : null}
                </div>
                <div className={s.formGroup}>
                  <span className={s.formLabel}>Tell Us All About It</span>
                  <textarea
                    className={cx(
                      s.formTextArea,
                      this.state.isAllFilled ? s.error : ""
                    )}
                    type="text"
                    id="message"
                    onChange={this.handleChange}
                  />
                  {this.state.isAllFilled ? (
                    <span className={cx(s.formAlert, s.error)}>
                      Please tell us your thoughts**
                    </span>
                  ) : null}
                </div>
                <button
                  className={s.formButton}
                  type="submit"
                  disabled={this.state.isAllFilled}
                  onClick={this.handleSumbit}
                >
                  SUBMIT
                </button>
              </form>
              {this.state.isSent ? (
                <div className={s.contactSent}>
                  <h3>
                    Thank you for touching in with us, your message has been
                    sent!
                  </h3>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ContactUs);
