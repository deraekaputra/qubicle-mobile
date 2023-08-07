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
import s from "./Header.css";
import Link from "../Link";
import Navigation from "../Navigation";
import ModalSignUp from "../ModalSignUp";
import ModalSignIn from "../ModalSignIn";
import logoUrl from "./logo.svg";
import avatar from "./avatar-default.png";

class Header extends React.Component {
  static propTypes = {
    isActive: PropTypes.bool,
    withMenu: PropTypes.bool
  };

  static defaultProps = {
    isActive: false,
    withMenu: true
  };

  state = {
    isScroll: true,
    isSlide: true,
    lastScrollY: 0,
    isSignedIn: false,
    showDropdown: false,
    showModalSignUp: false,
    showModalSignIn: false
  };

  componentWillMount() {
    this.handleScroll = this.handleScroll.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.handleOpenModalSignUp = this.handleOpenModalSignUp.bind(this);
    this.handleOpenModalSignIn = this.handleOpenModalSignIn.bind(this);
    this.handleCloseModalSignUp = this.handleCloseModalSignUp.bind(this);
    this.handleCloseModalSignIn = this.handleCloseModalSignIn.bind(this);
    this.handleSwitchModalSignInToSignUp = this.handleSwitchModalSignInToSignUp.bind(
      this
    );
    this.handleSwitchModalSignUpToSignIn = this.handleSwitchModalSignUpToSignIn.bind(
      this
    );
  }

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
    document.addEventListener("touchmove", this.handleSlide);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("touchmove", this.handleSlide);
  }

  handleScroll = () => {
    const isScroll = window.scrollY < 125;
    if (isScroll === !this.state.isScroll) {
      this.setState({ isScroll });
    }
  };

  handleSlide = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      this.setState({
        isSlide: false
      });
    } else {
      this.setState({
        isSlide: true
      });
    }
    this.setState({
      lastScrollY: currentScrollY
    });
  };

  showDropdown = event => {
    event.preventDefault();

    this.setState({ showDropdown: true }, () => {
      document.addEventListener("click", this.hideDropdown);
    });
  };

  hideDropdown = event => {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showDropdown: false }, () => {
        document.removeEventListener("click", this.hideDropdown);
      });
    }
  };

  handleOpenModalSignUp = () => {
    this.setState({ showModalSignUp: true });
  };

  handleOpenModalSignIn = () => {
    this.setState({ showModalSignIn: true });
  };

  handleCloseModalSignUp = () => {
    this.setState({ showModalSignUp: false });
  };

  handleCloseModalSignIn = () => {
    this.setState({ showModalSignIn: false });
  };

  handleSwitchModalSignUpToSignIn = () => {
    this.setState({
      showModalSignUp: false,
      showModalSignIn: true
    });
  };

  handleSwitchModalSignInToSignUp = () => {
    this.setState({
      showModalSignUp: true,
      showModalSignIn: false
    });
  };

  render() {
    const { isActive, withMenu } = this.props;
    return (
      <div
        className={cx(
          s.root,
          isActive ? s.isActive : "",
          this.state.isScroll ? s.isDefault : s.isActive
        )}
        style={{
          paddingBottom: withMenu ? `` : `15px`,
          transform: withMenu
            ? `translateY(${this.state.isSlide ? `0px` : `-50px`})`
            : ``
        }}
      >
        <div className={s.container}>
          <div className={s.top}>
            <Link className={s.brand} to="/">
              <img src={logoUrl} alt="Qubicle" />
            </Link>
            {this.state.isSignedIn ? (
              <nav className={s.actions}>
                <ul>
                  <li>
                    <button className={cx(s.action, s.search)} type="button" />
                  </li>
                  <li>
                    <button className={s.button} type="button">
                      Submit Idea
                    </button>
                  </li>
                  <li>
                    <button
                      className={cx(s.action, s.notification)}
                      type="button"
                    />
                  </li>
                  <li>
                    <button
                      className={cx(s.action, s.avatar)}
                      type="button"
                      onClick={this.showDropdown}
                    >
                      <div className={s.avatarWrapper}>
                        <img
                          className={s.avatarImage}
                          width="32"
                          height="32"
                          src={avatar}
                          alt="Qubicle User"
                        />
                      </div>
                    </button>
                    {this.state.showDropdown ? (
                      <div
                        className={s.dropdownMenu}
                        ref={element => {
                          this.dropdownMenu = element;
                        }}
                      >
                        <button className={s.dropdownButton} type="button">
                          Sign out
                        </button>
                      </div>
                    ) : null}
                  </li>
                </ul>
              </nav>
            ) : (
              <nav className={s.actions}>
                <ul>
                  <li>
                    <button className={cx(s.action, s.search)} type="button" />
                  </li>
                  <li>
                    <button
                      className={s.button}
                      type="button"
                      onClick={this.handleOpenModalSignUp}
                    >
                      Let&rsquo;s Collaborate!
                    </button>
                  </li>
                  <li>
                    <button
                      className={cx(s.action, s.user)}
                      type="button"
                      onClick={this.handleOpenModalSignIn}
                    />
                  </li>
                </ul>
              </nav>
            )}
          </div>
          {withMenu ? <Navigation /> : null}
        </div>
        <ModalSignUp
          showModalSignUp={this.state.showModalSignUp}
          closeModalSignUp={this.handleCloseModalSignUp}
          switchModal={this.handleSwitchModalSignUpToSignIn}
        />
        <ModalSignIn
          showModalSignIn={this.state.showModalSignIn}
          closeModalSignIn={this.handleCloseModalSignIn}
          switchModal={this.handleSwitchModalSignInToSignUp}
        />
      </div>
    );
  }
}

export default withStyles(s)(Header);
