/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Navigation.css";
import Link from "../Link";

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <nav className={s.menu}>
          <ul>
            <li>
              <Link className={s.item} to="/interest">
                MUSIC
              </Link>
            </li>
            <li>
              <Link className={s.item} to="/">
                FOOD
              </Link>
            </li>
            <li>
              <Link className={s.item} to="/">
                FASHION
              </Link>
            </li>
            <li>
              <Link className={s.item} to="/">
                BEAUTY
              </Link>
            </li>
            <li>
              <Link className={s.item} to="/">
                TRAVEL
              </Link>
            </li>
            <li>
              <Link className={s.item} to="/">
                ART
              </Link>
            </li>
            <li>
              <Link className={s.item} to="/others">
                OTHERS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
