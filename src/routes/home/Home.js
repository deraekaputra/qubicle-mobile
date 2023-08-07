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
import s from "./Home.css";
import Link from "../../components/Link";

import Event from "../../components/Event/Event";

class Home extends React.Component {
  static propTypes = {
    story: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    ).isRequired
  };

  state = {
    intmusic: "#F8DB65",
    intfood: "#73E4B2",
    intfashion: "#827AF9",
    intbeauty: "#FB74D2",
    inttravel: "#FA675D",
    intart: "#51EFE8",
    isSignedIn: false,
    isAds: false,
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
            <div className={s.headline}>
              <div className={s.headlineTop}>
                <div className={s.hero}>
                  <div
                    className={s.heroImage}
                    style={{
                      backgroundImage: `url(${story[1].post_image_cover_url})`
                    }}
                  />
                  <div className={s.heroTitle}>
                    <div className={s.container}>
                      <div className={s.interestLabel}>
                        <Link
                          to="/"
                          style={{
                            color: this.state.intmusic
                          }}
                        >
                          MUSIC
                        </Link>
                      </div>
                      <div className={s.title}>
                        <Link to="/story">
                          <span>NTRL</span>
                          <span>Rayakan</span>
                          <span>25</span>
                          <span>Tahun</span>
                          <span>Lewat</span>
                          <span>Album</span>
                          <span>&lsquo;XXV&rsquo;</span>
                          <span>Berisi</span>
                          <span>26</span>
                          <span>Lagu!</span>
                        </Link>
                      </div>
                      <div className={s.meta}>
                        <div className={s.author}>
                          {story[1].userpost.user_fullname}
                        </div>
                        <div className={s.readTime}>
                          10{" "}
                          <span style={{ color: this.state.intmusic }}>
                            MIN
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.headlineBottom}>
                <div className={s.section}>
                  <div className={s.container}>
                    <div className={s.sectionHorizontal}>
                      {range(4).map(i => (
                        <div className={s.item} key={i}>
                          <div className={s.card}>
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
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{ color: this.state.intmusic }}
                                >
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
                  </div>
                </div>
              </div>
            </div>
            <div className={s.iabThings}>
              <div className={s.iabThingsWrapper}>
                <Link to="/">
                  <img
                    src="https://dge4uaysoh8oy.cloudfront.net/public/templates/gallery/img/bd19shk7e/Identity-Theft-Protection-Soft-Banner-Design.jpg"
                    alt="iab item"
                  />
                </Link>
              </div>
            </div>
            <div className={s.trending}>
              <div className={s.section}>
                <div className={s.container}>
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
                        <Link to="/" style={{ color: this.state.inttravel }}>
                          TRAVEL
                        </Link>
                      </div>
                      <div className={s.readTime}>
                        10{" "}
                        <span style={{ color: this.state.inttravel }}>MIN</span>
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
                  {range(3).map(i => (
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
                          <Link to="/" style={{ color: this.state.intart }}>
                            ART
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
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="55" height="55">
                        <g fill="none" fillRule="evenodd">
                          <path fill="#F25A2B" d="M5 5h50v50H5z" />
                          <path fill="#0C0C17" d="M0 0h50v50H0z" />
                          <path
                            d="M16.248 32.497H10l.79-3.404h6.136l1.882-7.536h-6.324l.79-3.404h6.25L21.178 11h3.802l-1.618 7.153h6.512L31.53 11h3.764l-1.581 7.153H40v.038l-.753 3.366H33l-1.77 7.536h6.287l-.79 3.404h-6.174L29.046 39h-3.99l1.544-6.503h-6.437L18.695 39h-3.99l1.543-6.503zm11.03-3.404l1.881-7.536h-6.512l-1.806 7.536h6.436z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagsWrapper}>
                        <Link className={s.tag} to="/tag">
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
                        <Link className={s.tag} to="/">
                          cable
                        </Link>
                        <Link className={s.tag} to="/">
                          facebook
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {this.state.isSignedIn ? null : (
              <div>
                {this.state.isAds ? (
                  <div className={cx(s.boosterContents, s.exclusive)}>
                    <div
                      className={s.boosterBackground}
                      style={{
                        backgroundImage: `url(http://papers.co/wallpaper/papers.co-sl90-iphonex-apple-color-blur-gradation-28-wallpaper.jpg)`
                      }}
                    />
                    <div className={s.container}>
                      <span className={s.sectionBadge}>AD</span>
                      <h1 className={s.sectionTitle}>
                        Say hello to the future.
                      </h1>
                      <div className={s.sectionHorizontal}>
                        <div className={s.item}>
                          <Link className={s.exclusiveItemOuter} to="/">
                            <div
                              className={s.exclusiveItemInner}
                              style={{
                                backgroundImage: `url(https://www.apple.com/v/iphone-x/e/images/overview/modal/dual_cameras_hero_large_2x.jpg)`
                              }}
                            />
                          </Link>
                        </div>
                        <div className={s.item}>
                          <Link className={s.exclusiveItemOuter} to="/">
                            <div
                              className={s.exclusiveItemInner}
                              style={{
                                backgroundImage: `url(https://www.apple.com/v/iphone-x/e/images/overview/primary/design_truedepth_large_2x.jpg)`
                              }}
                            />
                          </Link>
                        </div>
                        <div className={s.item}>
                          <Link className={s.exclusiveItemOuter} to="/">
                            <div
                              className={s.exclusiveItemInner}
                              style={{
                                backgroundImage: `url(https://www.apple.com/v/iphone-x/e/images/overview/modal/design_expression_corner_large_2x.jpg)`
                              }}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={s.boosterContents}>
                    <div
                      className={s.boosterBackground}
                      style={{
                        backgroundImage: `url(${story[0].post_image_cover_url})`
                      }}
                    />
                    <div className={s.container}>
                      <h1 className={s.sectionTitle}>Editor&rsquo;s Picks</h1>
                      <div className={s.sectionHorizontal}>
                        {range(3).map(i => (
                          <div className={s.item} key={i}>
                            <div className={s.card}>
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
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intmusic }}
                                  >
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
                                    <Link to="/">{story[i].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[i].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            <Event value={3} />
            {this.state.isSignedIn ? (
              <div className={s.feeds}>
                <div className={s.recommendationContents}>
                  <div className={s.container}>
                    <h1 className={s.sectionTitle}>
                      <svg width="16" height="15">
                        <path
                          d="M8 12l-4.702 2.472.898-5.236L.392 5.528l5.257-.764L8 0l2.351 4.764 5.257.764-3.804 3.708.898 5.236z"
                          fill="#0C0C17"
                          fillRule="evenodd"
                        />
                      </svg>
                      You might like this
                    </h1>
                    <div className={s.sectionHorizontal}>
                      {range(5).map(i => (
                        <div className={s.item} key={i}>
                          <div className={s.card}>
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
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{ color: this.state.intmusic }}
                                >
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
                  </div>
                </div>
                {this.state.isAds ? (
                  <div className={cx(s.boosterContents, s.exclusive)}>
                    <div
                      className={s.boosterBackground}
                      style={{
                        backgroundImage: `url(http://papers.co/wallpaper/papers.co-sl90-iphonex-apple-color-blur-gradation-28-wallpaper.jpg)`
                      }}
                    />
                    <div className={s.container}>
                      <span className={s.sectionBadge}>AD</span>
                      <h1 className={s.sectionTitle}>
                        Say hello to the future.
                      </h1>
                      <div className={s.sectionHorizontal}>
                        <div className={s.item}>
                          <Link className={s.exclusiveItemOuter} to="/">
                            <div
                              className={s.exclusiveItemInner}
                              style={{
                                backgroundImage: `url(https://www.apple.com/v/iphone-x/e/images/overview/modal/dual_cameras_hero_large_2x.jpg)`
                              }}
                            />
                          </Link>
                        </div>
                        <div className={s.item}>
                          <Link className={s.exclusiveItemOuter} to="/">
                            <div
                              className={s.exclusiveItemInner}
                              style={{
                                backgroundImage: `url(https://www.apple.com/v/iphone-x/e/images/overview/primary/design_truedepth_large_2x.jpg)`
                              }}
                            />
                          </Link>
                        </div>
                        <div className={s.item}>
                          <Link className={s.exclusiveItemOuter} to="/">
                            <div
                              className={s.exclusiveItemInner}
                              style={{
                                backgroundImage: `url(https://www.apple.com/v/iphone-x/e/images/overview/modal/design_expression_corner_large_2x.jpg)`
                              }}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={s.boosterContents}>
                    <div
                      className={s.boosterBackground}
                      style={{
                        backgroundImage: `url(${
                          story[16].post_image_thumb_url
                        })`
                      }}
                    />
                    <div className={s.container}>
                      <h1 className={s.sectionTitle}>Editor&rsquo;s Picks</h1>
                      <div className={s.sectionHorizontal}>
                        {range(3).map(i => (
                          <div className={s.item} key={i}>
                            <div className={s.card}>
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
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intmusic }}
                                  >
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
                                    <Link to="/">{story[i].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[i].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div className={s.container}>
                  <div className={s.row}>
                    {range(6).map(i => (
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
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {range(9).map(i => (
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
                      </div>
                    ))}
                  </div>
                  {this.state.isContentLoading ? (
                    <div className={s.row}>
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
                </div>
                {this.state.isContentLoading ? null : (
                  <div className={s.container}>
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
                      <button className={s.feedsViewMore} type="button">
                        VIEW MORE
                      </button>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className={s.feeds}>
                <div className={s.section}>
                  <div className={s.container}>
                    <div className={s.sectionHeader}>
                      <h1 className={s.sectionTitle}>Music</h1>
                      <div className={s.sectionButton}>
                        <Link to="/" style={{ color: this.state.intmusic }}>
                          SEE ALL
                        </Link>
                      </div>
                    </div>
                    <div className={s.sectionHorizontal}>
                      {range(5).map(i => (
                        <div className={s.item} key={i}>
                          <div className={s.card}>
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
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{ color: this.state.intmusic }}
                                >
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
                  </div>
                </div>
                <div className={s.section}>
                  <div className={s.container}>
                    <div className={s.sectionHeader}>
                      <h1 className={s.sectionTitle}>Food</h1>
                      <div className={s.sectionButton}>
                        <Link to="/" style={{ color: this.state.intfood }}>
                          SEE ALL
                        </Link>
                      </div>
                    </div>
                    <div className={s.sectionHorizontal}>
                      {range(5).map(i => (
                        <div className={s.item} key={i}>
                          <div className={s.card}>
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
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{ color: this.state.intfood }}
                                >
                                  FOOD
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                10{" "}
                                <span style={{ color: this.state.intfood }}>
                                  MIN
                                </span>
                              </div>
                            </div>
                            <div className={s.cardBody}>
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
                  </div>
                </div>
                <div className={s.section}>
                  <div className={s.container}>
                    <div className={s.sectionHeader}>
                      <h1 className={s.sectionTitle}>Fashion</h1>
                      <div className={s.sectionButton}>
                        <Link to="/" style={{ color: this.state.intfashion }}>
                          SEE ALL
                        </Link>
                      </div>
                    </div>
                    <div className={s.sectionHorizontal}>
                      {range(5).map(i => (
                        <div className={s.item} key={i}>
                          <div className={s.card}>
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
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{ color: this.state.intfashion }}
                                >
                                  FASHION
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                10{" "}
                                <span style={{ color: this.state.intfashion }}>
                                  MIN
                                </span>
                              </div>
                            </div>
                            <div className={s.cardBody}>
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
                  </div>
                </div>
                <div className={s.section}>
                  <div className={s.container}>
                    <div className={s.sectionHeader}>
                      <h1 className={s.sectionTitle}>Beauty</h1>
                      <div className={s.sectionButton}>
                        <Link to="/" style={{ color: this.state.intbeauty }}>
                          SEE ALL
                        </Link>
                      </div>
                    </div>
                    <div className={s.sectionHorizontal}>
                      {range(5).map(i => (
                        <div className={s.item} key={i}>
                          <div className={s.card}>
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
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{ color: this.state.intbeauty }}
                                >
                                  BEAUTY
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                10{" "}
                                <span style={{ color: this.state.intbeauty }}>
                                  MIN
                                </span>
                              </div>
                            </div>
                            <div className={s.cardBody}>
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
                  </div>
                </div>
                <div className={s.section}>
                  <div className={s.container}>
                    <div className={s.sectionHeader}>
                      <h1 className={s.sectionTitle}>Travel</h1>
                      <div className={s.sectionButton}>
                        <Link to="/" style={{ color: this.state.inttravel }}>
                          SEE ALL
                        </Link>
                      </div>
                    </div>
                    <div className={s.sectionHorizontal}>
                      {range(5).map(i => (
                        <div className={s.item} key={i}>
                          <div className={s.card}>
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
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{ color: this.state.inttravel }}
                                >
                                  TRAVEL
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                10{" "}
                                <span style={{ color: this.state.inttravel }}>
                                  MIN
                                </span>
                              </div>
                            </div>
                            <div className={s.cardBody}>
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
                  </div>
                </div>
                <div className={s.section}>
                  <div className={s.container}>
                    <div className={s.sectionHeader}>
                      <h1 className={s.sectionTitle}>Art</h1>
                      <div className={s.sectionButton}>
                        <Link to="/" style={{ color: this.state.intart }}>
                          SEE ALL
                        </Link>
                      </div>
                    </div>
                    <div className={s.sectionHorizontal}>
                      {range(5).map(i => (
                        <div className={s.item} key={i}>
                          <div className={s.card}>
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
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{ color: this.state.intart }}
                                >
                                  ART
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                10{" "}
                                <span style={{ color: this.state.intart }}>
                                  MIN
                                </span>
                              </div>
                            </div>
                            <div className={s.cardBody}>
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
                  </div>
                </div>
              </div>
            )}
            <div className={s.iabThings}>
              <div className={s.iabThingsWrapper}>
                <Link to="/">
                  <img
                    src="https://dge4uaysoh8oy.cloudfront.net/public/templates/gallery/img/bd19shk7e/Identity-Theft-Protection-Soft-Banner-Design.jpg"
                    alt="iab item"
                  />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className={s.headline}>
              <div className={s.headlineTop}>
                <div className={s.hero}>
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
                          s.skeletonHeroInterestLabel
                        )}
                      />
                      <div
                        className={cx(
                          s.skeleton,
                          s.skeletonPrimary,
                          s.skeletonHeroTitleFirst
                        )}
                      />
                      <div
                        className={cx(
                          s.skeleton,
                          s.skeletonPrimary,
                          s.skeletonHeroTitleSecond
                        )}
                      />
                      <div className={s.meta}>
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonPrimary,
                            s.skeletonHeroAuthor
                          )}
                        />
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonPrimary,
                            s.skeletonHeroReadTime
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.headlineBottom}>
                <div className={s.section}>
                  <div className={s.container}>
                    <div className={s.sectionHorizontal}>
                      {range(4).map(i => (
                        <div className={s.item} key={i}>
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
                      ))}
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

export default withStyles(s)(Home);
