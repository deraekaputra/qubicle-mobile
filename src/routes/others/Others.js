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
import range from "lodash.range";
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Others.css";
import Link from "../../components/Link";

class Interest extends React.Component {
  static propTypes = {
    story: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    ).isRequired
  };

  state = {
    intzodiac: "#FB863B",
    intautomotive: "#D2843E",
    intinspirational: "#D0021B",
    intentertainment: "#9013FE",
    inttechnology: "#7ED321",
    contentLoading: false
  };

  componentWillMount() {
    this.showLoading = setTimeout(
      () => this.setState({ contentLoading: true }),
      3000
    );
  }

  componentWillUnmount() {
    clearTimeout(this.showLoading);
  }

  render() {
    const { story } = this.props;
    return (
      <div className={s.root}>
        {this.state.contentLoading ? (
          <div>
            <div className={s.hero}>
              <div className={s.heroTitle}>
                <div className={s.container}>
                  <h1 className={s.title}>
                    <span>Others</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className={s.contents}>
              <div className={s.contentsBorder} />
              <div className={s.container}>
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>Zodiac</h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="50" height="50">
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill={this.state.intzodiac}
                            d="M4.167 4.167H50V50H4.167z"
                          />
                          <path fill="#0C0C17" d="M0 0h45.833v45.833H0z" />
                          <path
                            d="M15.604 29.368h-5.187l.656-2.781h5.094l1.562-6.156h-5.25l.656-2.782h5.188l1.375-5.843h3.156l-1.344 5.843h5.407l1.375-5.843h3.125l-1.313 5.843h5.219v.032l-.625 2.75H29.51l-1.468 6.156h5.218l-.656 2.781H27.48l-1.25 5.313h-3.312l1.28-5.313h-5.343l-1.219 5.313h-3.312l1.281-5.313zm9.156-2.781l1.563-6.156h-5.406l-1.5 6.156h5.343z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.twelveCol}>
                      <div className={s.card}>
                        <div className={s.cardHead}>
                          <Link className={s.imageThumb} to="/">
                            <div
                              className={s.inner}
                              style={{
                                backgroundImage: `url(${
                                  story[24].post_image_thumb_url
                                })`
                              }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{ color: this.state.intzodiac }}
                            >
                              ZODIAC
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            10{" "}
                            <span style={{ color: this.state.intzodiac }}>
                              MIN
                            </span>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[24].title}</Link>
                            </h1>
                          </div>
                          <div className={s.cardMeta}>
                            <span className={s.metaAuthor}>
                              {story[24].userpost.user_fullname}
                            </span>
                            <span className={s.metaDivider} />
                            <span className={s.metaDate}>May 27, 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {range(2).map(i => (
                      <div className={s.sixCol} key={i}>
                        <div className={s.cardSmall}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                              <div className={s.readTime}>10 MIN</div>
                            </Link>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.intzodiac }}
                              >
                                ZODIAC
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {range(2).map(i => (
                      <div className={s.twelveCol} key={i}>
                        <div className={s.cardInline}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                            </Link>
                            <div className={s.readTime}>10 MIN</div>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.intzodiac }}
                              >
                                ZODIAC
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDivider} />
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={s.sectionButton}>
                    <Link to="/" style={{ color: this.state.intzodiac }}>
                      SEE ALL
                    </Link>
                  </div>
                </div>
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>Automotive</h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="50" height="50">
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill={this.state.intautomotive}
                            d="M4.167 4.167H50V50H4.167z"
                          />
                          <path fill="#0C0C17" d="M0 0h45.833v45.833H0z" />
                          <path
                            d="M15.604 29.368h-5.187l.656-2.781h5.094l1.562-6.156h-5.25l.656-2.782h5.188l1.375-5.843h3.156l-1.344 5.843h5.407l1.375-5.843h3.125l-1.313 5.843h5.219v.032l-.625 2.75H29.51l-1.468 6.156h5.218l-.656 2.781H27.48l-1.25 5.313h-3.312l1.28-5.313h-5.343l-1.219 5.313h-3.312l1.281-5.313zm9.156-2.781l1.563-6.156h-5.406l-1.5 6.156h5.343z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.twelveCol}>
                      <div className={s.card}>
                        <div className={s.cardHead}>
                          <Link className={s.imageThumb} to="/">
                            <div
                              className={s.inner}
                              style={{
                                backgroundImage: `url(${
                                  story[24].post_image_thumb_url
                                })`
                              }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{ color: this.state.intautomotive }}
                            >
                              AUTOMOTIVE
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            10{" "}
                            <span style={{ color: this.state.intautomotive }}>
                              MIN
                            </span>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[24].title}</Link>
                            </h1>
                          </div>
                          <div className={s.cardMeta}>
                            <span className={s.metaAuthor}>
                              {story[24].userpost.user_fullname}
                            </span>
                            <span className={s.metaDivider} />
                            <span className={s.metaDate}>May 27, 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {range(2).map(i => (
                      <div className={s.sixCol} key={i}>
                        <div className={s.cardSmall}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                              <div className={s.readTime}>10 MIN</div>
                            </Link>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.intautomotive }}
                              >
                                AUTOMOTIVE
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {range(2).map(i => (
                      <div className={s.twelveCol} key={i}>
                        <div className={s.cardInline}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                            </Link>
                            <div className={s.readTime}>10 MIN</div>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.intautomotive }}
                              >
                                AUTOMOTIVE
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDivider} />
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={s.sectionButton}>
                    <Link to="/" style={{ color: this.state.intautomotive }}>
                      SEE ALL
                    </Link>
                  </div>
                </div>
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>Entertainment</h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="50" height="50">
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill={this.state.intentertainment}
                            d="M4.167 4.167H50V50H4.167z"
                          />
                          <path fill="#0C0C17" d="M0 0h45.833v45.833H0z" />
                          <path
                            d="M15.604 29.368h-5.187l.656-2.781h5.094l1.562-6.156h-5.25l.656-2.782h5.188l1.375-5.843h3.156l-1.344 5.843h5.407l1.375-5.843h3.125l-1.313 5.843h5.219v.032l-.625 2.75H29.51l-1.468 6.156h5.218l-.656 2.781H27.48l-1.25 5.313h-3.312l1.28-5.313h-5.343l-1.219 5.313h-3.312l1.281-5.313zm9.156-2.781l1.563-6.156h-5.406l-1.5 6.156h5.343z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.twelveCol}>
                      <div className={s.card}>
                        <div className={s.cardHead}>
                          <Link className={s.imageThumb} to="/">
                            <div
                              className={s.inner}
                              style={{
                                backgroundImage: `url(${
                                  story[24].post_image_thumb_url
                                })`
                              }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{ color: this.state.intentertainment }}
                            >
                              ENTERTAINMENT
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            10{" "}
                            <span
                              style={{ color: this.state.intentertainment }}
                            >
                              MIN
                            </span>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[24].title}</Link>
                            </h1>
                          </div>
                          <div className={s.cardMeta}>
                            <span className={s.metaAuthor}>
                              {story[24].userpost.user_fullname}
                            </span>
                            <span className={s.metaDivider} />
                            <span className={s.metaDate}>May 27, 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {range(2).map(i => (
                      <div className={s.sixCol} key={i}>
                        <div className={s.cardSmall}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                              <div className={s.readTime}>10 MIN</div>
                            </Link>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.intentertainment }}
                              >
                                ENTERTAINMENT
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {range(2).map(i => (
                      <div className={s.twelveCol} key={i}>
                        <div className={s.cardInline}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                            </Link>
                            <div className={s.readTime}>10 MIN</div>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.intentertainment }}
                              >
                                ENTERTAINMENT
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDivider} />
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={s.sectionButton}>
                    <Link to="/" style={{ color: this.state.intentertainment }}>
                      SEE ALL
                    </Link>
                  </div>
                </div>
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>Inspirational</h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="50" height="50">
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill={this.state.intinspirational}
                            d="M4.167 4.167H50V50H4.167z"
                          />
                          <path fill="#0C0C17" d="M0 0h45.833v45.833H0z" />
                          <path
                            d="M15.604 29.368h-5.187l.656-2.781h5.094l1.562-6.156h-5.25l.656-2.782h5.188l1.375-5.843h3.156l-1.344 5.843h5.407l1.375-5.843h3.125l-1.313 5.843h5.219v.032l-.625 2.75H29.51l-1.468 6.156h5.218l-.656 2.781H27.48l-1.25 5.313h-3.312l1.28-5.313h-5.343l-1.219 5.313h-3.312l1.281-5.313zm9.156-2.781l1.563-6.156h-5.406l-1.5 6.156h5.343z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.twelveCol}>
                      <div className={s.card}>
                        <div className={s.cardHead}>
                          <Link className={s.imageThumb} to="/">
                            <div
                              className={s.inner}
                              style={{
                                backgroundImage: `url(${
                                  story[24].post_image_thumb_url
                                })`
                              }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{ color: this.state.intinspirational }}
                            >
                              INSPIRATIONAL
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            10{" "}
                            <span style={{ color: this.state.intzodiac }}>
                              MIN
                            </span>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[24].title}</Link>
                            </h1>
                          </div>
                          <div className={s.cardMeta}>
                            <span className={s.metaAuthor}>
                              {story[24].userpost.user_fullname}
                            </span>
                            <span className={s.metaDivider} />
                            <span className={s.metaDate}>May 27, 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {range(2).map(i => (
                      <div className={s.sixCol} key={i}>
                        <div className={s.cardSmall}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                              <div className={s.readTime}>10 MIN</div>
                            </Link>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.intinspirational }}
                              >
                                INSPIRATIONAL
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {range(2).map(i => (
                      <div className={s.twelveCol} key={i}>
                        <div className={s.cardInline}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                            </Link>
                            <div className={s.readTime}>10 MIN</div>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.intinspirational }}
                              >
                                INSPIRATIONAL
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDivider} />
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={s.sectionButton}>
                    <Link to="/" style={{ color: this.state.intinspirational }}>
                      SEE ALL
                    </Link>
                  </div>
                </div>
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>Technology</h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="50" height="50">
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill={this.state.inttechnology}
                            d="M4.167 4.167H50V50H4.167z"
                          />
                          <path fill="#0C0C17" d="M0 0h45.833v45.833H0z" />
                          <path
                            d="M15.604 29.368h-5.187l.656-2.781h5.094l1.562-6.156h-5.25l.656-2.782h5.188l1.375-5.843h3.156l-1.344 5.843h5.407l1.375-5.843h3.125l-1.313 5.843h5.219v.032l-.625 2.75H29.51l-1.468 6.156h5.218l-.656 2.781H27.48l-1.25 5.313h-3.312l1.28-5.313h-5.343l-1.219 5.313h-3.312l1.281-5.313zm9.156-2.781l1.563-6.156h-5.406l-1.5 6.156h5.343z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.twelveCol}>
                      <div className={s.card}>
                        <div className={s.cardHead}>
                          <Link className={s.imageThumb} to="/">
                            <div
                              className={s.inner}
                              style={{
                                backgroundImage: `url(${
                                  story[24].post_image_thumb_url
                                })`
                              }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{ color: this.state.inttechnology }}
                            >
                              TECHNOLOGY
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            10{" "}
                            <span style={{ color: this.state.inttechnology }}>
                              MIN
                            </span>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[24].title}</Link>
                            </h1>
                          </div>
                          <div className={s.cardMeta}>
                            <span className={s.metaAuthor}>
                              {story[24].userpost.user_fullname}
                            </span>
                            <span className={s.metaDivider} />
                            <span className={s.metaDate}>May 27, 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {range(2).map(i => (
                      <div className={s.sixCol} key={i}>
                        <div className={s.cardSmall}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                              <div className={s.readTime}>10 MIN</div>
                            </Link>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.inttechnology }}
                              >
                                TECHNOLOGY
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {range(2).map(i => (
                      <div className={s.twelveCol} key={i}>
                        <div className={s.cardInline}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                            </Link>
                            <div className={s.readTime}>10 MIN</div>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.inttechnology }}
                              >
                                TECHNOLOGY
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDivider} />
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={s.sectionButton}>
                    <Link to="/" style={{ color: this.state.inttechnology }}>
                      SEE ALL
                    </Link>
                  </div>
                </div>
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>Zodiac</h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="50" height="50">
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill={this.state.intzodiac}
                            d="M4.167 4.167H50V50H4.167z"
                          />
                          <path fill="#0C0C17" d="M0 0h45.833v45.833H0z" />
                          <path
                            d="M15.604 29.368h-5.187l.656-2.781h5.094l1.562-6.156h-5.25l.656-2.782h5.188l1.375-5.843h3.156l-1.344 5.843h5.407l1.375-5.843h3.125l-1.313 5.843h5.219v.032l-.625 2.75H29.51l-1.468 6.156h5.218l-.656 2.781H27.48l-1.25 5.313h-3.312l1.28-5.313h-5.343l-1.219 5.313h-3.312l1.281-5.313zm9.156-2.781l1.563-6.156h-5.406l-1.5 6.156h5.343z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.twelveCol}>
                      <div className={s.card}>
                        <div className={s.cardHead}>
                          <Link className={s.imageThumb} to="/">
                            <div
                              className={s.inner}
                              style={{
                                backgroundImage: `url(${
                                  story[24].post_image_thumb_url
                                })`
                              }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{ color: this.state.intzodiac }}
                            >
                              ZODIAC
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            10{" "}
                            <span style={{ color: this.state.intzodiac }}>
                              MIN
                            </span>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[24].title}</Link>
                            </h1>
                          </div>
                          <div className={s.cardMeta}>
                            <span className={s.metaAuthor}>
                              {story[24].userpost.user_fullname}
                            </span>
                            <span className={s.metaDivider} />
                            <span className={s.metaDate}>May 27, 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {range(2).map(i => (
                      <div className={s.sixCol} key={i}>
                        <div className={s.cardSmall}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                              <div className={s.readTime}>10 MIN</div>
                            </Link>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.intzodiac }}
                              >
                                ZODIAC
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {range(2).map(i => (
                      <div className={s.twelveCol} key={i}>
                        <div className={s.cardInline}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                            </Link>
                            <div className={s.readTime}>10 MIN</div>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.intzodiac }}
                              >
                                ZODIAC
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDivider} />
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={s.sectionButton}>
                    <Link to="/" style={{ color: this.state.intzodiac }}>
                      SEE ALL
                    </Link>
                  </div>
                </div>
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>Automotive</h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="50" height="50">
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill={this.state.intautomotive}
                            d="M4.167 4.167H50V50H4.167z"
                          />
                          <path fill="#0C0C17" d="M0 0h45.833v45.833H0z" />
                          <path
                            d="M15.604 29.368h-5.187l.656-2.781h5.094l1.562-6.156h-5.25l.656-2.782h5.188l1.375-5.843h3.156l-1.344 5.843h5.407l1.375-5.843h3.125l-1.313 5.843h5.219v.032l-.625 2.75H29.51l-1.468 6.156h5.218l-.656 2.781H27.48l-1.25 5.313h-3.312l1.28-5.313h-5.343l-1.219 5.313h-3.312l1.281-5.313zm9.156-2.781l1.563-6.156h-5.406l-1.5 6.156h5.343z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.twelveCol}>
                      <div className={s.card}>
                        <div className={s.cardHead}>
                          <Link className={s.imageThumb} to="/">
                            <div
                              className={s.inner}
                              style={{
                                backgroundImage: `url(${
                                  story[24].post_image_thumb_url
                                })`
                              }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{ color: this.state.intautomotive }}
                            >
                              AUTOMOTIVE
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            10{" "}
                            <span style={{ color: this.state.intautomotive }}>
                              MIN
                            </span>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[24].title}</Link>
                            </h1>
                          </div>
                          <div className={s.cardMeta}>
                            <span className={s.metaAuthor}>
                              {story[24].userpost.user_fullname}
                            </span>
                            <span className={s.metaDivider} />
                            <span className={s.metaDate}>May 27, 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {range(2).map(i => (
                      <div className={s.sixCol} key={i}>
                        <div className={s.cardSmall}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                              <div className={s.readTime}>10 MIN</div>
                            </Link>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.intautomotive }}
                              >
                                AUTOMOTIVE
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {range(2).map(i => (
                      <div className={s.twelveCol} key={i}>
                        <div className={s.cardInline}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                            </Link>
                            <div className={s.readTime}>10 MIN</div>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.intautomotive }}
                              >
                                AUTOMOTIVE
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDivider} />
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={s.sectionButton}>
                    <Link to="/" style={{ color: this.state.intautomotive }}>
                      SEE ALL
                    </Link>
                  </div>
                </div>
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>Entertainment</h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="50" height="50">
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill={this.state.intentertainment}
                            d="M4.167 4.167H50V50H4.167z"
                          />
                          <path fill="#0C0C17" d="M0 0h45.833v45.833H0z" />
                          <path
                            d="M15.604 29.368h-5.187l.656-2.781h5.094l1.562-6.156h-5.25l.656-2.782h5.188l1.375-5.843h3.156l-1.344 5.843h5.407l1.375-5.843h3.125l-1.313 5.843h5.219v.032l-.625 2.75H29.51l-1.468 6.156h5.218l-.656 2.781H27.48l-1.25 5.313h-3.312l1.28-5.313h-5.343l-1.219 5.313h-3.312l1.281-5.313zm9.156-2.781l1.563-6.156h-5.406l-1.5 6.156h5.343z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.twelveCol}>
                      <div className={s.card}>
                        <div className={s.cardHead}>
                          <Link className={s.imageThumb} to="/">
                            <div
                              className={s.inner}
                              style={{
                                backgroundImage: `url(${
                                  story[24].post_image_thumb_url
                                })`
                              }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{ color: this.state.intentertainment }}
                            >
                              ENTERTAINMENT
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            10{" "}
                            <span
                              style={{ color: this.state.intentertainment }}
                            >
                              MIN
                            </span>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[24].title}</Link>
                            </h1>
                          </div>
                          <div className={s.cardMeta}>
                            <span className={s.metaAuthor}>
                              {story[24].userpost.user_fullname}
                            </span>
                            <span className={s.metaDivider} />
                            <span className={s.metaDate}>May 27, 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {range(2).map(i => (
                      <div className={s.sixCol} key={i}>
                        <div className={s.cardSmall}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                              <div className={s.readTime}>10 MIN</div>
                            </Link>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.intentertainment }}
                              >
                                ENTERTAINMENT
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {range(2).map(i => (
                      <div className={s.twelveCol} key={i}>
                        <div className={s.cardInline}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                            </Link>
                            <div className={s.readTime}>10 MIN</div>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.intentertainment }}
                              >
                                ENTERTAINMENT
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDivider} />
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={s.sectionButton}>
                    <Link to="/" style={{ color: this.state.intentertainment }}>
                      SEE ALL
                    </Link>
                  </div>
                </div>
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>Inspirational</h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="50" height="50">
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill={this.state.intinspirational}
                            d="M4.167 4.167H50V50H4.167z"
                          />
                          <path fill="#0C0C17" d="M0 0h45.833v45.833H0z" />
                          <path
                            d="M15.604 29.368h-5.187l.656-2.781h5.094l1.562-6.156h-5.25l.656-2.782h5.188l1.375-5.843h3.156l-1.344 5.843h5.407l1.375-5.843h3.125l-1.313 5.843h5.219v.032l-.625 2.75H29.51l-1.468 6.156h5.218l-.656 2.781H27.48l-1.25 5.313h-3.312l1.28-5.313h-5.343l-1.219 5.313h-3.312l1.281-5.313zm9.156-2.781l1.563-6.156h-5.406l-1.5 6.156h5.343z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.twelveCol}>
                      <div className={s.card}>
                        <div className={s.cardHead}>
                          <Link className={s.imageThumb} to="/">
                            <div
                              className={s.inner}
                              style={{
                                backgroundImage: `url(${
                                  story[24].post_image_thumb_url
                                })`
                              }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{ color: this.state.intinspirational }}
                            >
                              INSPIRATIONAL
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            10{" "}
                            <span style={{ color: this.state.intzodiac }}>
                              MIN
                            </span>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[24].title}</Link>
                            </h1>
                          </div>
                          <div className={s.cardMeta}>
                            <span className={s.metaAuthor}>
                              {story[24].userpost.user_fullname}
                            </span>
                            <span className={s.metaDivider} />
                            <span className={s.metaDate}>May 27, 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {range(2).map(i => (
                      <div className={s.sixCol} key={i}>
                        <div className={s.cardSmall}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                              <div className={s.readTime}>10 MIN</div>
                            </Link>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.intinspirational }}
                              >
                                INSPIRATIONAL
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {range(2).map(i => (
                      <div className={s.twelveCol} key={i}>
                        <div className={s.cardInline}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                            </Link>
                            <div className={s.readTime}>10 MIN</div>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.intinspirational }}
                              >
                                INSPIRATIONAL
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDivider} />
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={s.sectionButton}>
                    <Link to="/" style={{ color: this.state.intinspirational }}>
                      SEE ALL
                    </Link>
                  </div>
                </div>
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>Technology</h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="50" height="50">
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill={this.state.inttechnology}
                            d="M4.167 4.167H50V50H4.167z"
                          />
                          <path fill="#0C0C17" d="M0 0h45.833v45.833H0z" />
                          <path
                            d="M15.604 29.368h-5.187l.656-2.781h5.094l1.562-6.156h-5.25l.656-2.782h5.188l1.375-5.843h3.156l-1.344 5.843h5.407l1.375-5.843h3.125l-1.313 5.843h5.219v.032l-.625 2.75H29.51l-1.468 6.156h5.218l-.656 2.781H27.48l-1.25 5.313h-3.312l1.28-5.313h-5.343l-1.219 5.313h-3.312l1.281-5.313zm9.156-2.781l1.563-6.156h-5.406l-1.5 6.156h5.343z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.twelveCol}>
                      <div className={s.card}>
                        <div className={s.cardHead}>
                          <Link className={s.imageThumb} to="/">
                            <div
                              className={s.inner}
                              style={{
                                backgroundImage: `url(${
                                  story[24].post_image_thumb_url
                                })`
                              }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{ color: this.state.inttechnology }}
                            >
                              TECHNOLOGY
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            10{" "}
                            <span style={{ color: this.state.inttechnology }}>
                              MIN
                            </span>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[24].title}</Link>
                            </h1>
                          </div>
                          <div className={s.cardMeta}>
                            <span className={s.metaAuthor}>
                              {story[24].userpost.user_fullname}
                            </span>
                            <span className={s.metaDivider} />
                            <span className={s.metaDate}>May 27, 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {range(2).map(i => (
                      <div className={s.sixCol} key={i}>
                        <div className={s.cardSmall}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                              <div className={s.readTime}>10 MIN</div>
                            </Link>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.inttechnology }}
                              >
                                TECHNOLOGY
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {range(2).map(i => (
                      <div className={s.twelveCol} key={i}>
                        <div className={s.cardInline}>
                          <div className={s.cardHead}>
                            <Link className={s.imageThumb} to="/">
                              <div
                                className={s.inner}
                                style={{
                                  backgroundImage: `url(${
                                    story[i].post_image_thumb_url
                                  })`
                                }}
                              />
                            </Link>
                            <div className={s.readTime}>10 MIN</div>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{ color: this.state.inttechnology }}
                              >
                                TECHNOLOGY
                              </Link>
                            </div>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDivider} />
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={s.sectionButton}>
                    <Link to="/" style={{ color: this.state.inttechnology }}>
                      SEE ALL
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.end}>
              <h3>
                You&rsquo;re all caught up.{" "}
                <span role="img" aria-label="party popper">
                  🎉
                </span>
              </h3>
            </div>
          </div>
        ) : (
          <div>
            <div className={s.hero}>
              <div className={s.heroTitle}>
                <div className={s.container}>
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonPrimary,
                      s.skeletonHeroTitle
                    )}
                  />
                </div>
              </div>
            </div>
            <div className={s.contents}>
              <div
                className={cx(
                  s.skeleton,
                  s.skeletonPrimary,
                  s.skeletonContentsBorder
                )}
              />
              <div className={s.container}>
                <div className={s.othersContents}>
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonSectionTitle
                    )}
                  />
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <div
                        className={cx(
                          s.skeleton,
                          s.skeletonPrimary,
                          s.skeletonIndicator
                        )}
                      />
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonPrimary,
                            s.skeletonTagFirst
                          )}
                        />
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonPrimary,
                            s.skeletonTagSecond
                          )}
                        />
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonPrimary,
                            s.skeletonTagThird
                          )}
                        />
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonPrimary,
                            s.skeletonTagFourth
                          )}
                        />
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonPrimary,
                            s.skeletonTagFifth
                          )}
                        />
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonPrimary,
                            s.skeletonTagSixth
                          )}
                        />
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonPrimary,
                            s.skeletonTagSeventh
                          )}
                        />
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonPrimary,
                            s.skeletonTagEighth
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.twelveCol}>
                      <div className={s.card}>
                        <div className={s.cardHead}>
                          <div
                            className={cx(
                              s.skeleton,
                              s.skeletonPrimary,
                              s.skeletonCardImage
                            )}
                          />
                          <div
                            className={cx(
                              s.skeleton,
                              s.skeletonSecondary,
                              s.skeletonCardInterestLabel
                            )}
                          />
                          <div
                            className={cx(
                              s.skeleton,
                              s.skeletonSecondary,
                              s.skeletonCardReadTime
                            )}
                          />
                        </div>
                        <div className={s.cardBody}>
                          <div
                            className={cx(
                              s.skeleton,
                              s.skeletonSecondary,
                              s.skeletonCardTitleFirst
                            )}
                          />
                          <div
                            className={cx(
                              s.skeleton,
                              s.skeletonSecondary,
                              s.skeletonCardTitleSecond
                            )}
                          />
                          <div className={s.cardMeta}>
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonSecondary,
                                s.skeletonCardAuthor
                              )}
                            />
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonSecondary,
                                s.skeletonCardDivider
                              )}
                            />
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonSecondary,
                                s.skeletonCardDate
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {range(2).map(i => (
                      <div className={s.sixCol} key={i}>
                        <div className={s.cardSmall}>
                          <div className={s.cardHead}>
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonPrimary,
                                s.skeletonCardSmallImage
                              )}
                            />
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonSecondary,
                                s.skeletonCardSmallReadTime
                              )}
                            />
                          </div>
                          <div className={s.cardBody}>
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonSecondary,
                                s.skeletonCardSmallInterestLabel
                              )}
                            />
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonSecondary,
                                s.skeletonCardSmallTitleFirst
                              )}
                            />
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonSecondary,
                                s.skeletonCardSmallTitleSecond
                              )}
                            />
                            <div className={s.cardMeta}>
                              <div
                                className={cx(
                                  s.skeleton,
                                  s.skeletonSecondary,
                                  s.skeletonCardSmallAuthor
                                )}
                              />
                              <div
                                className={cx(
                                  s.skeleton,
                                  s.skeletonSecondary,
                                  s.skeletonCardSmallDate
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {range(2).map(i => (
                      <div className={s.twelveCol} key={i}>
                        <div className={s.cardInline}>
                          <div className={s.cardHead}>
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonPrimary,
                                s.skeletonCardInlineImage
                              )}
                            />
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonSecondary,
                                s.skeletonCardInlineReadTime
                              )}
                            />
                          </div>
                          <div className={s.cardBody}>
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonSecondary,
                                s.skeletonCardInlineInterestLabel
                              )}
                            />
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonSecondary,
                                s.skeletonCardInlineTitleFirst
                              )}
                            />
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonSecondary,
                                s.skeletonCardInlineTitleSecond
                              )}
                            />
                            <div className={s.cardMeta}>
                              <div
                                className={cx(
                                  s.skeleton,
                                  s.skeletonSecondary,
                                  s.skeletonCardInlineAuthor
                                )}
                              />
                              <div
                                className={cx(
                                  s.skeleton,
                                  s.skeletonSecondary,
                                  s.skeletonCardDivider
                                )}
                              />
                              <div
                                className={cx(
                                  s.skeleton,
                                  s.skeletonSecondary,
                                  s.skeletonCardInlineDate
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(s)(Interest);
