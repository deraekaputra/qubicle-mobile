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
import s from "./Tag.css";
import Link from "../../components/Link";

class Tag extends React.Component {
  static propTypes = {
    story: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    ).isRequired
  };

  state = {
    intmusic: "#F8DB65",
    isNotFound: false,
    isContentLoading: false,
    isEnd: false,
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
            <div className={s.tagHeader}>
              <div className={s.container}>
                <div className={s.tagHeaderTitle}>
                  <h1 className={s.title}>Here&rsquo;s stories tagged in:</h1>
                  <div className={s.tagWrapper}>
                    <div className={s.indicator}>
                      <svg width="50" height="50">
                        <g fill="none" fillRule="evenodd">
                          <path fill="#F25A2B" d="M4.167 4.167H50V50H4.167z" />
                          <path fill="#0C0C17" d="M0 0h45.833v45.833H0z" />
                          <path
                            d="M15.604 29.368h-5.187l.656-2.781h5.094l1.562-6.156h-5.25l.656-2.782h5.188l1.375-5.843h3.156l-1.344 5.843h5.407l1.375-5.843h3.125l-1.313 5.843h5.219v.032l-.625 2.75H29.51l-1.468 6.156h5.218l-.656 2.781H27.48l-1.25 5.313h-3.312l1.28-5.313h-5.343l-1.219 5.313h-3.312l1.281-5.313zm9.156-2.781l1.563-6.156h-5.406l-1.5 6.156h5.343z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <h1 className={s.header}>pegawainegerisipil</h1>
                  </div>
                </div>
                <div className={s.relatedTags}>
                  <h3 className={s.relatedTagsTitle}>Related tags:</h3>
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
                  </div>
                </div>
              </div>
            </div>
            <div className={s.contents}>
              <div className={s.container}>
                {this.state.isNotFound ? (
                  <h3 className={s.notFound}>
                    We couldn&rsquo;t find stories related to this tag.
                  </h3>
                ) : (
                  <div>
                    <div className={s.section}>
                      <h1 className={s.sectionTitle}>Trending</h1>
                      <div className={s.card}>
                        <div className={s.cardHead}>
                          <Link className={s.imageThumb} to="/">
                            <div
                              className={s.inner}
                              style={{
                                backgroundImage: `url(${
                                  story[6].post_image_thumb_url
                                })`
                              }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link to="/" style={{ color: this.state.intmusic }}>
                              MUSIC
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            10{" "}
                            <span style={{ color: this.state.intmusic }}>
                              MIN
                            </span>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[6].title}</Link>
                            </h1>
                          </div>
                          <div className={s.cardMeta}>
                            <span className={s.metaAuthor}>
                              {story[6].userpost.user_fullname}
                            </span>
                            <span className={s.metaDivider} />
                            <span className={s.metaDate}>May 27, 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={s.section}>
                      <h1 className={s.sectionTitle}>Latest</h1>
                      {range(6).map(i => (
                        <div className={s.cardInline} key={i}>
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
                                style={{ color: this.state.intmusic }}
                              >
                                MUSIC
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
                      ))}
                      {this.state.isContentLoading ? (
                        <div>
                          {range(4).map(i => (
                            <div className={s.cardInline} key={i}>
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
                          ))}
                        </div>
                      ) : null}
                      {this.state.isContentLoading ? null : (
                        <div>
                          {this.state.isEnd ? (
                            <div className={s.end}>
                              <h3>
                                You&rsquo;re all caught up.{" "}
                                <span role="img" aria-label="party popper">
                                  🎉
                                </span>
                              </h3>
                            </div>
                          ) : (
                            <button className={s.viewMore} type="button">
                              VIEW MORE
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className={s.tagHeader}>
              <div className={s.container}>
                <div className={s.tagHeaderTitle}>
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonTitleOne
                    )}
                  />
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonTitleTwo
                    )}
                  />
                  <div className={s.tagWrapper}>
                    <div className={s.indicator}>
                      <div
                        className={cx(
                          s.skeleton,
                          s.skeletonPrimary,
                          s.skeletonIndicator
                        )}
                      />
                    </div>
                    <div
                      className={cx(
                        s.skeleton,
                        s.skeletonPrimary,
                        s.skeletonHeaderTitle
                      )}
                    />
                  </div>
                </div>
                <div className={s.relatedTags}>
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonRelatedTitle
                    )}
                  />
                  <div className={s.tagWrapper}>
                    <div
                      className={cx(
                        s.skeleton,
                        s.skeletonSecondary,
                        s.skeletonTagOne
                      )}
                    />
                    <div
                      className={cx(
                        s.skeleton,
                        s.skeletonSecondary,
                        s.skeletonTagTwo
                      )}
                    />
                    <div
                      className={cx(
                        s.skeleton,
                        s.skeletonSecondary,
                        s.skeletonTagThree
                      )}
                    />
                    <div
                      className={cx(
                        s.skeleton,
                        s.skeletonSecondary,
                        s.skeletonTagFour
                      )}
                    />
                    <div
                      className={cx(
                        s.skeleton,
                        s.skeletonSecondary,
                        s.skeletonTagFive
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={s.contents}>
              <div className={s.container}>
                <div>
                  <div className={s.section}>
                    <div
                      className={cx(
                        s.skeleton,
                        s.skeletonSecondary,
                        s.skeletonContentTitle
                      )}
                    />
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
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(s)(Tag);
