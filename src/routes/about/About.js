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
import s from "./About.css";
import Link from "../../components/Link";

import aboutGif from "../../../public/about-header-image.gif";

class About extends React.Component {
  static propTypes = {
    story: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    ).isRequired
  };

  state = {
    intmusic: "#F8DB65",
    intculinary: "#73E4B2",
    intfashion: "#827AF9",
    intbeauty: "#FB74D2",
    inttravel: "#FA675D",
    intart: "#51EFE8",
    intothers: "#A5A5A5",
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
                    <span>
                      Stories tailored for you{" "}
                      <span role="img" aria-label="cocktail glass">
                        🍸
                      </span>
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className={s.contents}>
              <div className={s.contentsBorder} />
              <div className={s.container}>
                <div className={s.aboutHeader}>
                  <img
                    className={s.aboutHeaderImage}
                    src={aboutGif}
                    alt="about qubicle"
                  />
                </div>
                <div className={s.aboutContent}>
                  <h1>Feed your curiousity; shift your perspective</h1>
                  <p>
                    We are an online media bringing forth the many facets of
                    youth and pop culture—encompassing music to art, fashion to
                    beauty, and culinary to travel. We are here to foster a
                    culture of curiosity by highlighting stories and communities
                    from across the country. The space to wander, and ponder, on
                    diverse ideas and perspectives.
                  </p>
                </div>
                <div className={s.aboutStories}>
                  <Tabs
                    renderActiveTabContentOnly
                    activeLinkStyle={{
                      color: "#CACACA"
                    }}
                  >
                    <nav className={s.aboutStoriesNav}>
                      <ul>
                        <li>
                          <TabLink
                            to="music"
                            className={s.aboutStoriesLink}
                            data-interest="music"
                          >
                            MUSIC
                          </TabLink>
                        </li>
                        <li>
                          <TabLink
                            to="travel"
                            className={s.aboutStoriesLink}
                            data-interest="travel"
                          >
                            TRAVEL
                          </TabLink>
                        </li>
                        <li>
                          <TabLink
                            to="culinary"
                            className={s.aboutStoriesLink}
                            data-interest="culinary"
                          >
                            CULINARY
                          </TabLink>
                        </li>
                        <li>
                          <TabLink
                            to="fashion"
                            className={s.aboutStoriesLink}
                            data-interest="fashion"
                          >
                            FASHION
                          </TabLink>
                        </li>
                        <li>
                          <TabLink
                            to="beauty"
                            className={s.aboutStoriesLink}
                            data-interest="beauty"
                          >
                            BEAUTY
                          </TabLink>
                        </li>
                        <li>
                          <TabLink
                            to="art"
                            className={s.aboutStoriesLink}
                            data-interest="art"
                          >
                            ART
                          </TabLink>
                        </li>
                        <li>
                          <TabLink
                            to="others"
                            className={s.aboutStoriesLink}
                            data-interest="others"
                          >
                            OTHERS
                          </TabLink>
                        </li>
                      </ul>
                    </nav>
                    <TabContent for="music" className={s.aboutStoriesContents}>
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
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabContent>
                    <TabContent for="travel" className={s.aboutStoriesContents}>
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
                                    style={{ color: this.state.inttravel }}
                                  >
                                    TRAVEL
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
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabContent>
                    <TabContent
                      for="culinary"
                      className={s.aboutStoriesContents}
                    >
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
                                  style={{ color: this.state.intculinary }}
                                >
                                  CULINARY
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                10{" "}
                                <span style={{ color: this.state.intculinary }}>
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
                                    style={{ color: this.state.intculinary }}
                                  >
                                    CULINARY
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
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabContent>
                    <TabContent
                      for="fashion"
                      className={s.aboutStoriesContents}
                    >
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
                                    style={{ color: this.state.intfashion }}
                                  >
                                    FASHION
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
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabContent>
                    <TabContent for="beauty" className={s.aboutStoriesContents}>
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
                                    style={{ color: this.state.intbeauty }}
                                  >
                                    BEAUTY
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
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabContent>
                    <TabContent for="art" className={s.aboutStoriesContents}>
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
                                    style={{ color: this.state.intart }}
                                  >
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
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabContent>
                    <TabContent for="others" className={s.aboutStoriesContents}>
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
                                  style={{ color: this.state.intothers }}
                                >
                                  SCIENCE AND TECHNOLOGY
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                10{" "}
                                <span style={{ color: this.state.intothers }}>
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
                                    style={{ color: this.state.intothers }}
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
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabContent>
                  </Tabs>
                </div>
                <div className={s.aboutContent}>
                  <h1>Embracing the best of both worlds</h1>
                  <p>
                    What is an online presence if it doesn’t positively affect
                    individuals or communities? Qubicle’s social space goes
                    beyond the digital realm where we have built community hubs
                    located in Jakarta and Surabaya. We have also maintained an
                    inspiring relationship with communities and individuals in 8
                    major cities in Indonesia. By integrating both worlds,
                    online and offline, we aspire to become a credible medium
                    that nurtures curiosity and inspiration amongst a plethora
                    of communities.
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
                <div className={cx(s.aboutContent, s.withBlack)}>
                  <h1>So, Want to Know More About Us?</h1>
                  <p>
                    If you really want to see what we&rsquo;re about, go and
                    explore our stories.<br />And remember:<br />
                    <b>getting lost can be good.</b>
                  </p>
                  <Link to="/">Let&rsquo;s Go</Link>
                </div>
                <div className={s.aboutContent}>
                  <h1>We want to hear from you</h1>
                  <p>
                    We embrace and nurture a culture of creativity; that is why
                    we warmly welcome collaborations with prospective partners
                    and/or creative communities. Contact us for event
                    collaboration; writing contributions; media partnership
                    proposals; or a long-term partnership. Together we can
                    cultivate and collaborate on ideas!
                  </p>
                  <Link to="/contact-us">Contact Us</Link>
                </div>
              </div>
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
                <div className={s.aboutHeader}>
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonAboutHeader
                    )}
                  />
                </div>
                <div className={s.aboutContent}>
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonPrimary,
                      s.skeletonContentTitleOne
                    )}
                  />
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonPrimary,
                      s.skeletonContentTitleTwo
                    )}
                  />
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonContentTextOne
                    )}
                  />
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonContentTextTwo
                    )}
                  />
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonContentTextThree
                    )}
                  />
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonContentTextFour
                    )}
                  />
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonContentTextFive
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(s)(About);
