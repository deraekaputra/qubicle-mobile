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
import s from "./Interest.css";
import Link from "../../components/Link";

class Interest extends React.Component {
  static propTypes = {
    story: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    ).isRequired,
    mainInterest: PropTypes.bool
  };

  static defaultProps = {
    mainInterest: true
  };

  state = {
    intmusic: "#F8DB65",
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
    const { story, mainInterest } = this.props;
    return (
      <div className={s.root}>
        {this.state.contentLoading ? (
          <div>
            {mainInterest ? (
              <div className={s.hero}>
                <div className={s.heroWrapper}>
                  <div
                    className={s.heroImage}
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1527031169734-cc605463fe17?ixlib=rb-0.3.5&s=e7aa86213928e0797be006a4faa5b505&auto=format&fit=crop&w=2550&q=80)`
                    }}
                  />
                  <div className={s.heroTitle}>
                    <div className={s.container}>
                      <h1 className={s.title}>
                        <span>Music</span>
                      </h1>
                      <div className={s.hashtags}>
                        <div className={s.indicator}>
                          <svg width="50" height="50">
                            <g fill="none" fillRule="evenodd">
                              <path
                                fill="#F8DB65"
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
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={s.hero}>
                <div className={s.heroTitle}>
                  <div className={s.container}>
                    <h1 className={s.title}>
                      <span>Music</span>
                    </h1>
                    <div className={s.hashtags}>
                      <div className={s.indicator}>
                        <svg width="50" height="50">
                          <g fill="none" fillRule="evenodd">
                            <path
                              fill="#F8DB65"
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
                  </div>
                </div>
              </div>
            )}
            <div className={s.contents}>
              <div
                className={s.contentsBorder}
                style={{
                  borderColor: this.state.intmusic
                }}
              />
              <div className={s.container}>
                <div
                  className={s.trending}
                  style={{
                    borderColor: this.state.intmusic
                  }}
                >
                  <h1 className={s.sectionTitle}>Trending</h1>
                  <div className={s.cardInline}>
                    <Link
                      className={s.cardNumber}
                      to="/"
                      style={{
                        borderColor: this.state.intmusic,
                        color: this.state.intmusic
                      }}
                    >
                      1
                    </Link>
                    <div className={s.cardBody}>
                      <div className={s.interestLabel}>
                        <Link to="/" style={{ color: this.state.intmusic }}>
                          MUSIC
                        </Link>
                      </div>
                      <div className={s.cardTitle}>
                        <h1 className={s.title}>
                          <Link to="/">{story[0].title}</Link>
                        </h1>
                      </div>
                      <div className={s.cardMeta}>
                        <span className={s.metaAuthor}>
                          {story[0].userpost.user_fullname}
                        </span>
                        <span className={s.metaDivider} />
                        <span className={s.metaDate}>May 27, 2018</span>
                      </div>
                    </div>
                  </div>
                  <div className={s.cardInline}>
                    <Link
                      className={s.cardNumber}
                      to="/"
                      style={{
                        borderColor: this.state.intmusic,
                        color: this.state.intmusic
                      }}
                    >
                      2
                    </Link>
                    <div className={s.cardBody}>
                      <div className={s.interestLabel}>
                        <Link to="/" style={{ color: this.state.intmusic }}>
                          MUSIC
                        </Link>
                      </div>
                      <div className={s.cardTitle}>
                        <h1 className={s.title}>
                          <Link to="/">{story[1].title}</Link>
                        </h1>
                      </div>
                      <div className={s.cardMeta}>
                        <span className={s.metaAuthor}>
                          {story[1].userpost.user_fullname}
                        </span>
                        <span className={s.metaDivider} />
                        <span className={s.metaDate}>May 27, 2018</span>
                      </div>
                    </div>
                  </div>
                  <div className={s.cardInline}>
                    <Link
                      className={s.cardNumber}
                      to="/"
                      style={{
                        borderColor: this.state.intmusic,
                        color: this.state.intmusic
                      }}
                    >
                      3
                    </Link>
                    <div className={s.cardBody}>
                      <div className={s.interestLabel}>
                        <Link to="/" style={{ color: this.state.intmusic }}>
                          MUSIC
                        </Link>
                      </div>
                      <div className={s.cardTitle}>
                        <h1 className={s.title}>
                          <Link to="/">{story[2].title}</Link>
                        </h1>
                      </div>
                      <div className={s.cardMeta}>
                        <span className={s.metaAuthor}>
                          {story[2].userpost.user_fullname}
                        </span>
                        <span className={s.metaDivider} />
                        <span className={s.metaDate}>May 27, 2018</span>
                      </div>
                    </div>
                  </div>
                  <div className={s.cardInline}>
                    <Link
                      className={s.cardNumber}
                      to="/"
                      style={{
                        borderColor: this.state.intmusic,
                        color: this.state.intmusic
                      }}
                    >
                      4
                    </Link>
                    <div className={s.cardBody}>
                      <div className={s.interestLabel}>
                        <Link to="/" style={{ color: this.state.intmusic }}>
                          MUSIC
                        </Link>
                      </div>
                      <div className={s.cardTitle}>
                        <h1 className={s.title}>
                          <Link to="/">{story[3].title}</Link>
                        </h1>
                      </div>
                      <div className={s.cardMeta}>
                        <span className={s.metaAuthor}>
                          {story[3].userpost.user_fullname}
                        </span>
                        <span className={s.metaDivider} />
                        <span className={s.metaDate}>May 27, 2018</span>
                      </div>
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
                  {range(4).map(i => (
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
                            <Link to="/" style={{ color: this.state.intmusic }}>
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
                            <span className={s.metaDate}>May 27, 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {range(6).map(i => (
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
                            <Link to="/" style={{ color: this.state.intmusic }}>
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
                    </div>
                  ))}
                </div>
                {this.setState.isContentLoading ? (
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
                      <button
                        className={s.viewMore}
                        type="button"
                        style={{
                          borderColor: this.state.intmusic,
                          color: this.state.intmusic
                        }}
                      >
                        VIEW MORE
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            {mainInterest ? (
              <div className={s.hero}>
                <div className={s.heroWrapper}>
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonHeroImage
                    )}
                  />
                  <div className={s.heroTitle}>
                    <div className={s.container}>
                      <div
                        className={cx(
                          s.skeleton,
                          s.skeletonPrimary,
                          s.skeletonHeroTitle
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
                    </div>
                  </div>
                </div>
              </div>
            ) : (
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
                  </div>
                </div>
              </div>
            )}
            <div className={s.contents}>
              <div
                className={cx(
                  s.skeleton,
                  s.skeletonPrimary,
                  s.skeletonContentsBorder
                )}
              />
              <div className={s.container}>
                <div className={s.trending}>
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonSectionTitle
                    )}
                  />
                  {range(4).map(i => (
                    <div className={s.cardInline} key={i}>
                      <div
                        className={cx(
                          s.skeleton,
                          s.skeletonPrimary,
                          s.skeletonCardInlineNumber
                        )}
                      />
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
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(s)(Interest);
