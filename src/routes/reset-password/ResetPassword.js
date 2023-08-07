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
import s from "./ResetPassword.css";
import logoUrl from "../../../public/logo.svg";

class ResetPassword extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.nav}>
          <div className={s.navWrapper}>
            <div className={s.brand} to="/">
              <img src={logoUrl} alt="Qubicle" />
            </div>
          </div>
        </div>
        <div className={s.contents}>
          <div className={s.container}>
            <div className={s.contentsTitle}>
              <h1>Reset your password.</h1>
              <h3>
                Strong password include numbers, letters, and punctuation marks.
              </h3>
            </div>
            <div className={s.form}>
              <div className={s.formWrapper}>
                <div className={s.formGroup}>
                  <span className={s.formLabel}>Type your new password</span>
                  <input
                    className={s.formInput}
                    type="password"
                    id="password"
                  />
                </div>
                <div className={s.formGroup}>
                  <span className={s.formLabel}>
                    Type you new password one more time
                  </span>
                  <input
                    className={s.formInput}
                    type="password"
                    id="retypePassword"
                  />
                </div>
                <div className={cx(s.formAlert, s.error)}>
                  <span>Oops, your password is too short.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.buttonWrapper}>
          <button type="button" disabled>
            SUBMIT
          </button>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ResetPassword);
