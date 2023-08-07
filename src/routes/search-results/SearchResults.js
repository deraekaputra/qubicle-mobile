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
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./SearchResults.css";
import Link from "../../components/Link";

class SearchResults extends React.Component {
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
    isContentLoading: false,
    isEnd: false,
    isStoriesNotFound: false,
    isInterestNotFound: false,
    isTagsNotFound: false,
    showSearch: false,
    showSearchLoading: false
  };

  handleOnChange = () => {
    this.setState({
      showSearch: true
    });

    if (this.searchInput.value === "") {
      this.setState({
        showSearch: false
      });
    }

    setTimeout(() => {
      this.setState({ showSearchLoading: true });
    }, 3000);

    if (this.searchInput.value === "qwe") {
      this.setState({
        isStoriesNotFound: true,
        isInterestNotFound: true,
        isTagsNotFound: true
      });
    } else {
      this.setState({
        isStoriesNotFound: false,
        isInterestNotFound: false,
        isTagsNotFound: false
      });
    }
  };

  handleClearSearch = () => {
    this.searchInput.value = "";

    this.setState({
      showSearch: false
    });
  };

  render() {
    const { story } = this.props;
    return (
      <div className={s.root}>
        <div className={s.nav}>
          <div className={s.container}>
            <div className={s.navWrapper}>
              <button className={s.searchBack} type="button">
                <svg width="20" height="20">
                  <path
                    d="M13.882.283L4.108 8.966c-.503.458-.503 1.265 0 1.701l9.705 8.617c.504.436 1.305.502 1.786 0 .458-.48.389-1.2-.114-1.636l-8.47-7.527a.408.408 0 0 1 0-.61l8.47-7.527c.457-.393.549-1.09.16-1.57-.39-.48-1.283-.567-1.763-.13z"
                    fill="#FFF"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              <div className={s.searchInput}>
                <form className={s.searchForm}>
                  <input
                    type="search"
                    placeholder="Search Qubicle..."
                    onChange={this.handleOnChange}
                    ref={element => {
                      this.searchInput = element;
                    }}
                  />
                  {this.state.showSearch ? (
                    <button
                      className={s.searchClear}
                      type="button"
                      onClick={this.handleClearSearch}
                    >
                      <svg width="20" height="20">
                        <path
                          d="M10 8.674L6.906 5.581a.938.938 0 0 0-1.325 1.325L8.674 10l-3.093 3.094a.937.937 0 1 0 1.325 1.325L10 11.326l3.094 3.093a.937.937 0 1 0 1.325-1.325L11.326 10l3.093-3.094a.937.937 0 1 0-1.325-1.325L10 8.674zm-7.071 8.397c-3.905-3.905-3.905-10.237 0-14.142 3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0z"
                          fill="#FFF"
                          fillRule="evenodd"
                        />
                      </svg>
                    </button>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </div>
        {this.state.showSearch ? (
          <div>
            {this.state.showSearchLoading ? (
              <Tabs renderActiveTabContentOnly>
                <div className={s.contentsNav}>
                  <div className={s.container}>
                    <ul>
                      <li>
                        <TabLink
                          to="stories"
                          className={s.tabLink}
                          activeClassName={s.tabLinkActive}
                          default
                        >
                          Stories
                        </TabLink>
                      </li>
                      <li>
                        <TabLink
                          to="interests"
                          className={s.tabLink}
                          activeClassName={s.tabLinkActive}
                          default
                        >
                          Interests
                        </TabLink>
                      </li>
                      <li>
                        <TabLink
                          to="tags"
                          className={s.tabLink}
                          activeClassName={s.tabLinkActive}
                          default
                        >
                          Tags
                        </TabLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={s.contents}>
                  <div className={s.container}>
                    <TabContent for="stories">
                      {this.state.isStoriesNotFound ? (
                        <h3 className={s.notFound}>
                          We couldn&rsquo;t find stories.
                        </h3>
                      ) : (
                        <div>
                          {range(9).map(i => (
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
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                          {this.state.isEnd ? (
                            <div className={s.end}>
                              <h3>
                                You&rsquo;re all caught up.{" "}
                                <span role="img" aria-label="party popper">
                                  🎉
                                </span>
                              </h3>
                            </div>
                          ) : null}
                        </div>
                      )}
                    </TabContent>
                    <TabContent for="interests">
                      {this.state.isInterestNotFound ? (
                        <h3 className={s.notFound}>
                          We couldn&rsquo;t find interests.
                        </h3>
                      ) : (
                        <div>
                          <div className={s.row}>
                            <div className={s.sixCol}>
                              <div className={s.interestCard}>
                                <div
                                  className={s.interestCardImage}
                                  style={{
                                    backgroundImage: `url(${
                                      story[0].post_image_cover_url
                                    })`
                                  }}
                                />
                                <div className={s.interestCardTitle}>
                                  <span
                                    style={{
                                      color: this.state.intmusic
                                    }}
                                  >
                                    MUSIC
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className={s.sixCol}>
                              <div className={s.interestCard}>
                                <div
                                  className={s.interestCardImage}
                                  style={{
                                    backgroundImage: `url(${
                                      story[1].post_image_cover_url
                                    })`
                                  }}
                                />
                                <div className={s.interestCardTitle}>
                                  <span
                                    style={{
                                      color: this.state.intfood
                                    }}
                                  >
                                    FOOD
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className={s.sixCol}>
                              <div className={s.interestCard}>
                                <div
                                  className={s.interestCardImage}
                                  style={{
                                    backgroundImage: `url(${
                                      story[2].post_image_cover_url
                                    })`
                                  }}
                                />
                                <div className={s.interestCardTitle}>
                                  <span
                                    style={{
                                      color: this.state.intfashion
                                    }}
                                  >
                                    FASHION
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </TabContent>
                    <TabContent for="tags">
                      {this.state.isTagsNotFound ? (
                        <h3 className={s.notFound}>
                          We couldn&rsquo;t find tags.
                        </h3>
                      ) : (
                        <div>
                          <div className={s.hashtags}>
                            <div className={s.indicator}>
                              <svg width="50" height="50">
                                <g fill="none" fillRule="evenodd">
                                  <path
                                    fill="#F25A2B"
                                    d="M4.167 4.167H50V50H4.167z"
                                  />
                                  <path
                                    fill="#0C0C17"
                                    d="M0 0h45.833v45.833H0z"
                                  />
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
                      )}
                    </TabContent>
                  </div>
                </div>
              </Tabs>
            ) : (
              <div>
                <div className={s.contentsNav}>
                  <div className={s.container}>
                    <ul>
                      <li>
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonSecondary,
                            s.skeletonTabLinkFirst
                          )}
                        />
                      </li>
                      <li>
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonSecondary,
                            s.skeletonTabLinkSecond
                          )}
                        />
                      </li>
                      <li>
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonSecondary,
                            s.skeletonTabLinkThird
                          )}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={s.contents}>
                  <div className={s.container}>
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
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

export default withStyles(s)(SearchResults);
