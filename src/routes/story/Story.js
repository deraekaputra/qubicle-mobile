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
import { Element, scroller } from "react-scroll";
import ContentEditable from "react-contenteditable";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Story.css";
import Link from "../../components/Link";

class Story extends React.Component {
  static propTypes = {
    story: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string
      })
    ).isRequired
  };

  state = {
    isSignedIn: true,
    intmusic: "#F8DB65",
    isScroll: true,
    lastScrollY: 0,
    like: false,
    noComment: false,
    commentContent: "",
    commentContentReplyParent: "",
    commentContentReplyChildren: "",
    commentFocus: false,
    commentViewAll: false,
    commentViewReplies: false,
    commentReplyParent: false,
    commentReplyParentFocus: false,
    commentReplyChildren: false,
    commentReplyChildrenFocus: false,
    contentLoading: false,
    isShare: false
  };

  componentWillMount() {
    this.showLoading = setTimeout(
      () => this.setState({ contentLoading: true }),
      3000
    );
  }

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    clearTimeout(this.showLoading);
    document.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      this.setState({
        isScroll: false
      });
    } else {
      this.setState({
        isScroll: true
      });
    }
    this.setState({
      lastScrollY: currentScrollY
    });
  };

  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
  };

  scrollTo = () => {
    scroller.scrollTo("commentSection", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -121
    });
  };

  shareSheetOpen = () => {
    this.setState({
      isShare: true
    });
  };

  shareSheetClose = () => {
    this.setState({
      isShare: !this.state.isShare
    });
  };

  handleChange = event => {
    this.setState({ commentContent: event.target.value });
  };

  handleChangeReplyParent = event => {
    this.setState({ commentContentReplyParent: event.target.value });
  };

  handleChangeReplyChildren = event => {
    this.setState({ commentContentReplyChildren: event.target.value });
  };

  handleFocus = () => {
    this.setState({
      commentFocus: true
    });
  };

  handleUnFocus = () => {
    this.setState({
      commentContent: "",
      commentFocus: false
    });
  };

  handleUnFocusReplyParent = () => {
    this.setState({
      commentContentReplyParent: "",
      commentReplyParent: false
    });
  };

  handleUnFocusReplyChildren = () => {
    this.setState({
      commentContentReplyChildren: "",
      commentReplyChildren: false
    });
  };

  handleViewAllComments = () => {
    this.setState({
      commentViewAll: true
    });
  };

  handleViewRepliesComments = () => {
    this.setState({
      commentViewReplies: !this.state.commentViewReplies
    });
  };

  handleReplyParentComment = () => {
    this.setState({
      commentReplyParent: true,
      commentReplyParentFocus: true
    });
  };

  handleReplyChildrenComment = () => {
    this.setState({
      commentReplyChildren: true,
      commentReplyChildrenFocus: true
    });
  };

  render() {
    const { story } = this.props;
    return (
      <div className={s.root}>
        {this.state.contentLoading ? (
          <div>
            <div className={s.hero}>
              <div className={s.heroWrapper}>
                <div
                  className={s.heroImage}
                  style={{
                    backgroundImage: `url(${story[17].post_image_cover_url})`
                  }}
                />
                <div className={s.heroTitle}>
                  <div className={s.container}>
                    <div className={cx(s.heroItem, s.interestLabel)}>
                      <Link
                        to="/"
                        style={{
                          color: this.state.intmusic
                        }}
                      >
                        MUSIC
                      </Link>
                    </div>
                    <h1 className={cx(s.heroItem, s.title)}>
                      <span>Chvrches</span>
                      <span>Pastikan</span>
                      <span>Akan</span>
                      <span>Konser</span>
                      <span>di</span>
                      <span>Jakarta</span>
                      <span>25</span>
                      <span>Juli</span>
                      <span>2018</span>
                    </h1>
                    <div className={cx(s.heroItem, s.meta)}>
                      <span className={s.date}>July 10, 2018</span>
                      <span
                        className={s.author}
                        style={{
                          color: this.state.intmusic
                        }}
                      >
                        {story[17].userpost.user_fullname}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.contents}>
              <div
                className={s.contentsBorder}
                style={{
                  borderColor: this.state.intmusic
                }}
              />
              <div>
                <div className={s.contentsSummary}>
                  <b>{story[17].summary}</b>
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
                <div
                  className={s.contentsBody}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: story[37].content }}
                />
                <div className={s.contentsDivider}>
                  <svg width="25" height="5">
                    <path
                      d="M22.5 5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-10 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-10 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
                      fill="#4A4A4A"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
                <div className={s.hashtags}>
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
              </div>
            </div>
            <div className={s.contentBottom}>
              <div className={s.container}>
                <div className={s.profile}>
                  <div className={s.profileInner}>
                    <div className={s.profileAvatar}>
                      <img
                        className={s.profileImage}
                        width="50"
                        height="50"
                        src={story[17].userpost.user_image_profile_url}
                        alt="Qubicle User"
                      />
                    </div>
                    <div className={s.profileBody}>
                      <div className={s.profileName}>
                        <h1>{story[17].userpost.user_fullname}</h1>
                      </div>
                      <div className={s.profileBio}>
                        <span>
                          A female leader trying to make a difference in design
                          and tech
                        </span>
                      </div>
                      <div className={s.profileSocial}>
                        <button className={s.socialButton} type="button">
                          <svg width="20" height="20">
                            <defs>
                              <path
                                d="M13.752 20v-7.738h2.654l.378-3.025h-3.032V7.509c0-.817.233-1.638 1.391-1.638h1.754V3.123c-1.427-.193-2.734-.082-2.734-.082-2.63.153-3.677 2.132-3.476 4.468v1.728h-2.62v3.025h2.62V20H1.371c-.476 0-.65-.05-.824-.143a.972.972 0 0 1-.404-.404C.05 19.278 0 19.105 0 18.629V1.37C0 .895.05.721.143.547A.972.972 0 0 1 .547.143C.722.05.895 0 1.371 0H18.63c.476 0 .65.05.824.143.174.093.31.23.404.404.093.175.143.348.143.824V18.63c0 .476-.05.65-.143.824a.972.972 0 0 1-.404.404c-.175.093-.348.143-.824.143h-4.877z"
                                id="facebookProfileSocial"
                              />
                            </defs>
                            <g fill="none" fillRule="evenodd">
                              <mask id="facebookProfileSocialMask" fill="#fff">
                                <use xlinkHref="#facebookProfileSocial" />
                              </mask>
                              <use
                                fill="#FFF"
                                xlinkHref="#facebookProfileSocial"
                              />
                              <g
                                mask="url(#facebookProfileSocialMask)"
                                fill="#FFF"
                              >
                                <path d="M-10-10h40v40h-40z" />
                              </g>
                            </g>
                          </svg>
                        </button>
                        <button className={s.socialButton} type="button">
                          <svg width="20" height="20">
                            <defs>
                              <path
                                d="M17.964 6.296c0-.188-.004-.375-.012-.56A8.453 8.453 0 0 0 20 3.529a7.844 7.844 0 0 1-2.357.647 4.224 4.224 0 0 0 1.805-2.365 7.866 7.866 0 0 1-2.605 1.008c-.748-.853-1.816-1.397-2.996-1.417-2.266-.038-4.103 1.883-4.103 4.29 0 .342.036.674.107.994-3.413-.22-6.437-2.002-8.46-4.688a4.57 4.57 0 0 0-.555 2.202c0 1.524.724 2.88 1.825 3.679a3.919 3.919 0 0 1-1.859-.571v.056c0 2.13 1.415 3.916 3.293 4.333-.345.098-.708.149-1.081.147a3.737 3.737 0 0 1-.772-.084c.522 1.746 2.038 3.021 3.833 3.064C4.67 15.99 2.901 16.689.98 16.684c-.33 0-.658-.022-.979-.062 1.817 1.25 3.973 1.978 6.291 1.978 7.546.002 11.673-6.587 11.673-12.304z"
                                id="twitterProfileSocial"
                              />
                            </defs>
                            <g
                              transform="translate(0 1)"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <mask id="twitterProfileSocialMask" fill="#fff">
                                <use xlinkHref="#twitterProfileSocial" />
                              </mask>
                              <use
                                fill="#FFF"
                                xlinkHref="#twitterProfileSocial"
                              />
                              <g
                                mask="url(#twitterProfileSocialMask)"
                                fill="#FFF"
                              >
                                <path d="M-10-10h40v40h-40z" />
                              </g>
                            </g>
                          </svg>
                        </button>
                        <button className={s.socialButton} type="button">
                          <svg width="20" height="20">
                            <defs>
                              <path
                                d="M5.676 0A5.681 5.681 0 0 0 0 5.676v8.648A5.681 5.681 0 0 0 5.676 20h8.648A5.681 5.681 0 0 0 20 14.324V5.676A5.681 5.681 0 0 0 14.324 0H5.676zm0 1.622h8.648a4.027 4.027 0 0 1 4.054 4.054v8.648a4.027 4.027 0 0 1-4.054 4.054H5.676a4.027 4.027 0 0 1-4.054-4.054V5.676a4.027 4.027 0 0 1 4.054-4.054zm9.73 1.621a1.08 1.08 0 1 0-.002 2.161 1.08 1.08 0 0 0 .001-2.16zM10 4.865A5.148 5.148 0 0 0 4.865 10 5.148 5.148 0 0 0 10 15.135 5.148 5.148 0 0 0 15.135 10 5.148 5.148 0 0 0 10 4.865zm0 1.621A3.501 3.501 0 0 1 13.514 10 3.501 3.501 0 0 1 10 13.514 3.501 3.501 0 0 1 6.486 10 3.501 3.501 0 0 1 10 6.486z"
                                id="instagramProfileSocial"
                              />
                            </defs>
                            <g fill="none" fillRule="evenodd">
                              <mask id="instagramProfileSocialMask" fill="#fff">
                                <use xlinkHref="#instagramProfileSocial" />
                              </mask>
                              <use
                                fill="#FFF"
                                fillRule="nonzero"
                                xlinkHref="#instagramProfileSocial"
                              />
                              <g
                                mask="url(#instagramProfileSocialMask)"
                                fill="#FFF"
                              >
                                <path d="M-10-10h40v40h-40z" />
                              </g>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className={s.profileBorder}
                    style={{ borderColor: this.state.intmusic }}
                  />
                </div>
                <div className={s.contentActions}>
                  <h1>
                    Like what you read? Give {story[17].userpost.user_fullname}{" "}
                    your appreciation.
                  </h1>
                  <h3>
                    From a quick cheer to a standing ovation, like to show how
                    much you enjoyed this story.
                  </h3>
                  <div className={s.actions}>
                    <div className={s.actionsLeft}>
                      <div className={s.actionsItem}>
                        <button
                          className={s.actionsButton}
                          type="button"
                          onClick={this.handleLike}
                        >
                          <svg width="25" height="23">
                            <defs>
                              <path
                                d={
                                  this.state.like
                                    ? `M12.583 22.25c-.606 0-1.159-.234-1.607-.652l-8.96-8.86C.198 10.94-.461 8.308.33 5.936 1.384 2.782 4.124.75 7.34.75c1.95 0 3.769.755 5.112 2.085l.105.104.105-.104A7.217 7.217 0 0 1 17.774.75c1.95 0 3.768.755 5.111 2.085a7.132 7.132 0 0 1 0 10.137l-8.748 8.652c-.368.39-.947.626-1.554.626z`
                                    : `M12.583 22.25c-.606 0-1.159-.234-1.607-.652l-8.96-8.86C.198 10.94-.461 8.308.33 5.936 1.384 2.782 4.124.75 7.34.75c1.95 0 3.769.755 5.112 2.085l.105.104.105-.104A7.217 7.217 0 0 1 17.774.75c1.95 0 3.768.755 5.111 2.085a7.132 7.132 0 0 1 0 10.137l-8.748 8.652c-.368.39-.947.626-1.554.626zM7.365 3.226c-1.686 0-3.768.912-4.638 3.491-.5 1.486-.08 3.154 1.054 4.274l8.776 8.678 8.564-8.47a4.603 4.603 0 0 0 1.37-3.309 4.71 4.71 0 0 0-1.37-3.31c-.895-.885-2.081-1.354-3.346-1.354a4.817 4.817 0 0 0-3.347 1.355l-1.001.964c-.5.494-1.291.494-1.793 0l-.974-.964c-.844-.886-2.03-1.355-3.295-1.355z`
                                }
                                id="likeActionsTop"
                              />
                            </defs>
                            <use
                              fill={
                                this.state.like
                                  ? this.state.intmusic
                                  : `#9B9B9B`
                              }
                              fillRule="nonzero"
                              xlinkHref="#likeActionsTop"
                            />
                          </svg>
                        </button>
                        <span
                          style={{
                            color: this.state.like ? this.state.intmusic : ""
                          }}
                        >
                          168
                        </span>
                      </div>
                    </div>
                    <div className={s.actionsRight}>
                      <div className={s.actionsItem}>
                        <button className={s.actionsButton} type="button">
                          <svg width="25" height="25">
                            <defs>
                              <path
                                d="M17.19 25v-9.672h3.317l.472-3.782H17.19v-2.16c0-1.021.292-2.047 1.739-2.047h2.192V3.903c-1.783-.24-3.418-.102-3.418-.102-3.287.191-4.596 2.666-4.344 5.585v2.16h-3.276v3.782h3.276V25H1.714c-.596 0-.812-.062-1.03-.179a1.215 1.215 0 0 1-.505-.505C.062 24.098 0 23.882 0 23.286V1.714C0 1.118.062.902.179.684.295.466.466.295.684.18.902.062 1.118 0 1.714 0h21.572c.596 0 .812.062 1.03.179.218.116.389.287.505.505.117.218.179.434.179 1.03v21.572c0 .596-.062.812-.179 1.03a1.215 1.215 0 0 1-.505.505c-.218.117-.434.179-1.03.179H17.19z"
                                id="facebookActionsTop"
                              />
                            </defs>
                            <g fill="none" fillRule="evenodd">
                              <mask id="facebookActionsTopMask" fill="#fff">
                                <use xlinkHref="#facebookActionsTop" />
                              </mask>
                              <use
                                fill="#FFF"
                                xlinkHref="#facebookActionsTop"
                              />
                              <g
                                mask="url(#facebookActionsTopMask)"
                                fill="#9B9B9B"
                              >
                                <path d="M-12.5-12.5h50v50h-50z" />
                              </g>
                            </g>
                          </svg>
                        </button>
                      </div>
                      <div className={s.actionsItem}>
                        <button className={s.actionsButton} type="button">
                          <svg width="25" height="23">
                            <defs>
                              <path
                                d="M22.455 7.87c0-.235-.005-.468-.015-.699A10.566 10.566 0 0 0 25 4.411a9.805 9.805 0 0 1-2.946.808 5.28 5.28 0 0 0 2.256-2.956 9.833 9.833 0 0 1-3.257 1.26c-.935-1.067-2.269-1.747-3.744-1.772-2.832-.047-5.129 2.354-5.129 5.363 0 .428.045.843.133 1.243C8.048 8.08 4.268 5.854 1.74 2.496a5.713 5.713 0 0 0-.694 2.753c0 1.905.905 3.599 2.281 4.598a4.898 4.898 0 0 1-2.323-.713v.07c0 2.663 1.768 4.895 4.115 5.416-.43.123-.884.186-1.35.184a4.671 4.671 0 0 1-.965-.106c.652 2.183 2.547 3.777 4.79 3.83-1.755 1.461-3.967 2.334-6.369 2.327A9.74 9.74 0 0 1 0 20.777c2.271 1.563 4.966 2.473 7.864 2.473 9.432.002 14.59-8.234 14.59-15.38z"
                                id="twitterActionsTop"
                              />
                            </defs>
                            <g
                              transform="translate(0 -1)"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <mask id="twitterActionsTopMask" fill="#fff">
                                <use xlinkHref="#twitterActionsTop" />
                              </mask>
                              <use fill="#FFF" xlinkHref="#twitterActionsTop" />
                              <g
                                mask="url(#twitterActionsTopMask)"
                                fill="#9B9B9B"
                              >
                                <path d="M-12.5-12.5h50v50h-50z" />
                              </g>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <Element name="commentSection" className={s.commentSection}>
                  <div className={s.comments}>
                    <div className={s.commentsTitle}>
                      <h1>{this.state.noComment ? `0` : `4`} Comments</h1>
                    </div>
                    <div className={s.commentsInput}>
                      {this.state.isSignedIn ? (
                        <div className={s.inputWrapper}>
                          <div className={s.inputAvatar}>
                            <img
                              width="30"
                              height="30"
                              src={story[10].userpost.user_image_profile_url}
                              alt="Qubicle User"
                            />
                          </div>
                          <ContentEditable
                            className={s.inputField}
                            placeholder="Write a comment..."
                            html={this.state.commentContent}
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                          />
                        </div>
                      ) : (
                        <div className={s.inputWrapper}>
                          <button className={s.inputButton} type="button">
                            <svg width="25" height="23">
                              <defs>
                                <path
                                  d="M3.735 21.852c-.206.412-.117.913.177 1.265.235.236.53.383.852.383.118 0 .265-.03.383-.059l5.089-1.824c.735.117 1.5.177 2.264.177 6.882 0 12.5-4.559 12.5-10.147S19.382 1.5 12.5 1.5 0 6.059 0 11.647c0 3.117 1.795 6.088 4.794 8l-1.059 2.205zM22.65 11.681c0 4.365-4.56 7.925-10.15 7.925-.695 0-1.362-.055-2.03-.167-.168-.029-.362 0-.528.055l-3.615 1.28.611-1.307c.25-.5.056-1.14-.445-1.419-2.614-1.5-4.143-3.893-4.143-6.396 0-4.338 4.56-7.896 10.15-7.896 5.59 0 10.15 3.56 10.15 7.925z"
                                  id="commentsActionsBottom"
                                />
                              </defs>
                              <g
                                transform="translate(0 -1)"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <mask
                                  id="commentsActionsBottomMask"
                                  fill="#fff"
                                >
                                  <use xlinkHref="#commentsActionsBottom" />
                                </mask>
                                <use
                                  fill="#000"
                                  fillRule="nonzero"
                                  xlinkHref="#commentsActionsBottom"
                                />
                                <g
                                  mask="url(#commentsActionsBottomMask)"
                                  fill="#9B9B9B"
                                >
                                  <path d="M-12.5-12.5h50v50h-50z" />
                                </g>
                              </g>
                            </svg>
                            <span>Write a comment...</span>
                          </button>
                        </div>
                      )}
                      {this.state.commentFocus ? (
                        <div className={s.inputActions}>
                          <button
                            className={s.inputCancel}
                            type="button"
                            onClick={this.handleUnFocus}
                          >
                            Cancel
                          </button>
                          <button
                            className={s.inputComment}
                            type="button"
                            disabled
                          >
                            Comment
                          </button>
                        </div>
                      ) : null}
                    </div>
                    {this.state.noComment ? (
                      <div className={s.commentsNone}>
                        <h3>
                          There&rsquo;s nothing here. Be the first to comment!
                        </h3>
                      </div>
                    ) : (
                      <div className={s.commentsStream}>
                        <ul className={s.commentsLists}>
                          <li className={s.comment}>
                            <div className={s.commentContent}>
                              <div className={s.commentAvatar}>
                                <img
                                  src={story[0].userpost.user_image_profile_url}
                                  alt="avatar user"
                                />
                              </div>
                              <div className={s.commentBody}>
                                <div className={s.commentHeader}>
                                  <span className={s.username}>
                                    {story[0].userpost.user_fullname}
                                  </span>
                                  <span className={s.date}>July 24</span>
                                </div>
                                <div className={s.commentBodyInner}>
                                  <div className={s.commentMessage}>
                                    <p>
                                      I can&rsquo;t wait to see their in in
                                      Jakarta!!
                                    </p>
                                  </div>
                                </div>
                                <div className={s.commentActions}>
                                  <menu className={s.commentActionsMenu}>
                                    <li>
                                      <button
                                        type="button"
                                        onClick={this.handleReplyParentComment}
                                      >
                                        Reply
                                      </button>
                                    </li>
                                  </menu>
                                  {this.state.commentReplyParent ? (
                                    <div className={s.commentsInput}>
                                      <div className={s.inputWrapper}>
                                        <div className={s.inputAvatar}>
                                          <img
                                            width="45"
                                            height="45"
                                            src={
                                              story[0].userpost
                                                .user_image_profile_url
                                            }
                                            alt="Qubicle User"
                                          />
                                        </div>
                                        <ContentEditable
                                          className={s.inputField}
                                          placeholder="Write a comment..."
                                          html={
                                            this.state.commentContentReplyParent
                                          }
                                          onChange={
                                            this.handleChangeReplyParent
                                          }
                                        />
                                      </div>
                                      {this.state.commentReplyParentFocus ? (
                                        <div className={s.inputActions}>
                                          <button
                                            className={s.inputCancel}
                                            type="button"
                                            onClick={
                                              this.handleUnFocusReplyParent
                                            }
                                          >
                                            Cancel
                                          </button>
                                          <button
                                            className={s.inputComment}
                                            type="button"
                                          >
                                            Comment
                                          </button>
                                        </div>
                                      ) : null}
                                    </div>
                                  ) : null}
                                  <button
                                    className={cx(
                                      s.commentViewReplies,
                                      this.state.commentViewReplies
                                        ? s.isActive
                                        : ``
                                    )}
                                    type="button"
                                    onClick={this.handleViewRepliesComments}
                                  >
                                    {this.state.commentViewReplies
                                      ? `Hide replies`
                                      : `Show 2 replies`}
                                    <svg width="10" height="6">
                                      <path
                                        d="M5 3.916L1.434.253A.824.824 0 0 0 .247.254a.877.877 0 0 0-.001 1.22l4.162 4.274a.821.821 0 0 0 1.185 0l4.162-4.275A.878.878 0 0 0 9.753.254.821.821 0 0 0 8.567.253L5 3.916z"
                                        fill="#9B9B9B"
                                        fillRule="nonzero"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                            {this.state.commentViewReplies ? (
                              <ul className={s.commentChildren}>
                                <li className={s.comment}>
                                  <div className={s.commentContent}>
                                    <div className={s.commentAvatar}>
                                      <img
                                        src={
                                          story[0].userpost
                                            .user_image_profile_url
                                        }
                                        alt="avatar user"
                                      />
                                    </div>
                                    <div className={s.commentBody}>
                                      <div className={s.commentHeader}>
                                        <span className={s.username}>
                                          {story[0].userpost.user_fullname}
                                        </span>
                                        <span className={s.date}>July 24</span>
                                      </div>
                                      <div className={s.commentBodyInner}>
                                        <div className={s.commentMessage}>
                                          <p>Mantulll!!! (Mantap Betulll!!!)</p>
                                        </div>
                                      </div>
                                      <div className={s.commentActions}>
                                        <menu className={s.commentActionsMenu}>
                                          <li>
                                            <button
                                              type="button"
                                              onClick={
                                                this.handleReplyChildrenComment
                                              }
                                            >
                                              Reply
                                            </button>
                                          </li>
                                        </menu>
                                        {this.state.commentReplyChildren ? (
                                          <div className={s.commentsInput}>
                                            <div className={s.inputWrapper}>
                                              <div className={s.inputAvatar}>
                                                <img
                                                  width="45"
                                                  height="45"
                                                  src={
                                                    story[0].userpost
                                                      .user_image_profile_url
                                                  }
                                                  alt="Qubicle User"
                                                />
                                              </div>
                                              <ContentEditable
                                                className={s.inputField}
                                                placeholder="Write a comment..."
                                                html={
                                                  this.state
                                                    .commentContentReplyChildren
                                                }
                                                onChange={
                                                  this.handleChangeReplyChildren
                                                }
                                              />
                                            </div>
                                            {this.state
                                              .commentReplyChildrenFocus ? (
                                              <div className={s.inputActions}>
                                                <button
                                                  className={s.inputCancel}
                                                  type="button"
                                                  onClick={
                                                    this
                                                      .handleUnFocusReplyChildren
                                                  }
                                                >
                                                  Cancel
                                                </button>
                                                <button
                                                  className={s.inputComment}
                                                  type="button"
                                                >
                                                  Comment
                                                </button>
                                              </div>
                                            ) : null}
                                          </div>
                                        ) : null}
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className={s.comment}>
                                  <div className={s.commentContent}>
                                    <div className={s.commentAvatar}>
                                      <img
                                        src={
                                          story[10].userpost
                                            .user_image_profile_url
                                        }
                                        alt="avatar user"
                                      />
                                    </div>
                                    <div className={s.commentBody}>
                                      <div className={s.commentHeader}>
                                        <span className={s.username}>
                                          {story[10].userpost.user_fullname}
                                        </span>
                                        <span className={s.date}>July 24</span>
                                      </div>
                                      <div className={s.commentBodyInner}>
                                        <div className={s.commentMessage}>
                                          <p>Mantulll!!! (Mantap Betulll!!!)</p>
                                        </div>
                                      </div>
                                      <div className={s.commentActions}>
                                        <menu className={s.commentActionsMenu}>
                                          <li>
                                            <button type="button">Reply</button>
                                          </li>
                                        </menu>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            ) : null}
                          </li>
                          {this.state.commentViewAll ? (
                            <li className={s.comment}>
                              <div className={s.commentContent}>
                                <div className={s.commentAvatar}>
                                  <img
                                    src={
                                      story[3].userpost.user_image_profile_url
                                    }
                                    alt="avatar user"
                                  />
                                </div>
                                <div className={s.commentBody}>
                                  <div className={s.commentHeader}>
                                    <span className={s.username}>
                                      {story[3].userpost.user_fullname}
                                    </span>
                                    <span className={s.date}>July 24</span>
                                  </div>
                                  <div className={s.commentBodyInner}>
                                    <div className={s.commentMessage}>
                                      <p>Lezgooo!</p>
                                    </div>
                                  </div>
                                  <div className={s.commentActions}>
                                    <menu className={s.commentActionsMenu}>
                                      <li>
                                        <button type="button">Reply</button>
                                      </li>
                                    </menu>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ) : null}
                        </ul>
                        {this.state.commentViewAll ? null : (
                          <div className={s.commentViewAllComments}>
                            <button
                              type="button"
                              onClick={this.handleViewAllComments}
                            >
                              View all comments
                              <svg width="10" height="6">
                                <path
                                  d="M5 3.916L1.434.253A.824.824 0 0 0 .247.254a.877.877 0 0 0-.001 1.22l4.162 4.274a.821.821 0 0 0 1.185 0l4.162-4.275A.878.878 0 0 0 9.753.254.821.821 0 0 0 8.567.253L5 3.916z"
                                  fill="#0C0C17"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Element>
              </div>
            </div>
            <div className={s.similarContents}>
              <div className={s.container}>
                <h1 className={s.sectionTitle}>
                  <svg width="16" height="15">
                    <path
                      d="M8 12l-4.702 2.472.898-5.236L.392 5.528l5.257-.764L8 0l2.351 4.764 5.257.764-3.804 3.708.898 5.236z"
                      fill="#0C0C17"
                      fillRule="evenodd"
                    />
                  </svg>
                  Similar stories
                </h1>
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
            <div
              className={s.stickyActions}
              style={{
                transform: `translateY(${this.state.isScroll ? `0%` : `100%`})`
              }}
            >
              <div className={s.stickyActionsWrapper}>
                <div className={s.actions}>
                  <div className={s.actionsLeft}>
                    <div className={s.actionsItem}>
                      <button className={s.actionsButton} type="button">
                        <svg width="22" height="22">
                          <path
                            d="M15.006 1.774l-9.634 8.401c-.496.444-.496 1.224 0 1.647l9.566 8.337c.496.422 1.286.486 1.76 0 .451-.464.383-1.16-.113-1.583l-8.348-7.283a.39.39 0 0 1 0-.591l8.348-7.282c.451-.38.541-1.056.158-1.52-.384-.464-1.264-.548-1.737-.126z"
                            fill="#0C0C17"
                            fillRule="nonzero"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className={s.actionsCenter}>
                    <div className={s.actionsItem}>
                      <button
                        className={s.actionsButton}
                        type="button"
                        onClick={this.handleLike}
                      >
                        <svg width="22" height="22">
                          <path
                            d={
                              this.state.like
                                ? `M11.073 20.46c-.533 0-1.02-.206-1.415-.573l-7.884-7.798C.174 10.507-.406 8.191.29 6.103 1.218 3.328 3.629 1.54 6.46 1.54c1.715 0 3.315.665 4.497 1.835l.093.091.092-.091a6.351 6.351 0 0 1 4.499-1.835c1.715 0 3.316.665 4.498 1.835a6.276 6.276 0 0 1 0 8.92L12.44 19.91c-.323.344-.833.55-1.367.55v.001z`
                                : `M11.073 20.46c-.533 0-1.02-.206-1.415-.573l-7.884-7.798C.174 10.507-.406 8.191.29 6.103 1.218 3.328 3.629 1.54 6.46 1.54c1.715 0 3.315.665 4.497 1.835l.093.091.092-.091a6.351 6.351 0 0 1 4.499-1.835c1.715 0 3.316.665 4.498 1.835a6.276 6.276 0 0 1 0 8.92L12.44 19.91c-.323.344-.833.55-1.367.55v.001zM6.482 3.719c-1.484 0-3.317.802-4.082 3.072-.44 1.307-.07 2.776.927 3.76l7.723 7.638 7.537-7.453a4.05 4.05 0 0 0 1.205-2.913c0-1.1-.44-2.133-1.205-2.912a4.143 4.143 0 0 0-2.945-1.192 4.24 4.24 0 0 0-2.945 1.192l-.882.848a1.115 1.115 0 0 1-1.577 0l-.858-.848c-.742-.78-1.785-1.192-2.898-1.192z`
                            }
                            fill={
                              this.state.like ? this.state.intmusic : `#0C0C17`
                            }
                            fillRule="nonzero"
                          />
                        </svg>
                      </button>
                      <span
                        style={{
                          color: this.state.like ? this.state.intmusic : ""
                        }}
                      >
                        168
                      </span>
                    </div>
                    <div className={s.actionsItem}>
                      <button
                        className={s.actionsButton}
                        type="button"
                        onClick={() => this.scrollTo()}
                      >
                        <svg width="22" height="22">
                          <path
                            d="M3.287 19.23c-.181.362-.103.803.156 1.113.207.208.466.337.75.337.103 0 .232-.026.336-.052l4.478-1.605c.647.103 1.32.156 1.993.156 6.056 0 11-4.012 11-8.93 0-4.917-4.944-8.929-11-8.929S0 5.332 0 10.25c0 2.742 1.58 5.357 4.22 7.039l-.933 1.941zm16.645-8.951c0 3.842-4.013 6.974-8.932 6.974-.612 0-1.199-.049-1.787-.147-.147-.025-.318 0-.464.049L5.568 18.28l.538-1.15a.958.958 0 0 0-.392-1.249c-2.3-1.32-3.646-3.425-3.646-5.628 0-3.818 4.013-6.95 8.932-6.95 4.92 0 8.932 3.133 8.932 6.975z"
                            fill="#0C0C17"
                            fillRule="nonzero"
                          />
                        </svg>
                      </button>
                      <span>4</span>
                    </div>
                  </div>
                  <div className={s.actionsRight}>
                    <div className={s.actionsItem}>
                      <button
                        className={s.actionsButton}
                        type="button"
                        onClick={() => this.shareSheetOpen()}
                      >
                        <svg width="22" height="22">
                          <path
                            d="M11.06 15.777a.84.84 0 0 1-.616-.274.97.97 0 0 1-.255-.66V3.187l-2.35 2.499a.835.835 0 0 1-1.241 0 .977.977 0 0 1-.257-.666c0-.25.092-.49.257-.665L10.45.267a.83.83 0 0 1 1.219 0l3.83 4.088c.178.17.282.41.29.666a.969.969 0 0 1-.249.686.84.84 0 0 1-.634.28.843.843 0 0 1-.626-.301l-2.35-2.5v11.656a.97.97 0 0 1-.255.661.84.84 0 0 1-.616.274zm4.54-8.564h2.024c.577 0 1.13.247 1.538.685.408.438.638 1.032.638 1.651v10.115c0 .62-.23 1.214-.638 1.652a2.104 2.104 0 0 1-1.538.684H4.376c-.577 0-1.13-.246-1.538-.684a2.426 2.426 0 0 1-.638-1.652V9.55c0-1.29.974-2.335 2.176-2.335H6.4c.481 0 .87.417.87.934 0 .516-.389.934-.87.934H4.376c-.24 0-.435.21-.435.467v10.115c0 .258.195.467.435.467h13.248a.42.42 0 0 0 .308-.137.485.485 0 0 0 .127-.33V9.55a.485.485 0 0 0-.127-.33.42.42 0 0 0-.308-.137H15.6c-.481 0-.87-.418-.87-.934 0-.517.389-.935.87-.935z"
                            fill="#0C0C17"
                            fillRule="nonzero"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={s.shareSheet}
              style={{
                transform: `translateY(${this.state.isShare ? `0%` : `100%`})`
              }}
            >
              <div className={s.shareSheetWrapper}>
                <div className={s.shareSheetHeader}>
                  <h3 className={s.shareSheetTitle}>Share</h3>
                  <button
                    className={s.shareSheetClose}
                    type="button"
                    onClick={() => this.shareSheetClose()}
                  >
                    <svg width="18" height="18">
                      <path
                        d="M9 10.21l-7.54 7.537a.854.854 0 1 1-1.21-1.209L7.79 9 .253 1.46A.855.855 0 1 1 1.462.25L9 7.79 16.54.254a.854.854 0 1 1 1.21 1.209L10.21 9l7.538 7.54a.855.855 0 0 1-1.21 1.21L9 10.21z"
                        fill="#08080F"
                        fillRule="nonzero"
                      />
                    </svg>
                  </button>
                </div>
                <div className={s.shareSheetBody}>
                  <ul className={s.shareSheetMenu}>
                    <li className={s.shareSheetItem}>
                      <button className={s.shareSheetButton} type="button">
                        <svg width="25" height="25">
                          <path
                            d="M17.19 25v-9.672h3.317l.472-3.782H17.19v-2.16c0-1.021.292-2.047 1.739-2.047h2.192V3.903c-1.783-.24-3.418-.102-3.418-.102-3.287.191-4.596 2.666-4.344 5.585v2.16h-3.276v3.782h3.276V25H1.714c-.596 0-.812-.062-1.03-.179a1.215 1.215 0 0 1-.505-.505C.062 24.098 0 23.882 0 23.286V1.714C0 1.118.062.902.179.684.295.466.466.295.684.18.902.062 1.118 0 1.714 0h21.572c.596 0 .812.062 1.03.179.218.116.389.287.505.505.117.218.179.434.179 1.03v21.572c0 .596-.062.812-.179 1.03a1.215 1.215 0 0 1-.505.505c-.218.117-.434.179-1.03.179H17.19z"
                            fill="#0C0C17"
                            fillRule="evenodd"
                          />
                        </svg>
                        <span>Share to Facebook</span>
                      </button>
                    </li>
                    <li className={s.shareSheetItem}>
                      <button className={s.shareSheetButton} type="button">
                        <svg width="25" height="25">
                          <path
                            d="M22.455 7.87c0-.235-.005-.468-.015-.699A10.566 10.566 0 0 0 25 4.411a9.805 9.805 0 0 1-2.946.808 5.28 5.28 0 0 0 2.256-2.956 9.833 9.833 0 0 1-3.257 1.26c-.935-1.067-2.269-1.747-3.744-1.772-2.832-.047-5.129 2.354-5.129 5.363 0 .428.045.843.133 1.243C8.048 8.08 4.268 5.854 1.74 2.496a5.713 5.713 0 0 0-.694 2.753c0 1.905.905 3.599 2.281 4.598a4.898 4.898 0 0 1-2.323-.713v.07c0 2.663 1.768 4.895 4.115 5.416-.43.123-.884.186-1.35.184a4.671 4.671 0 0 1-.965-.106c.652 2.183 2.547 3.777 4.79 3.83-1.755 1.461-3.967 2.334-6.369 2.327A9.74 9.74 0 0 1 0 20.777c2.271 1.563 4.966 2.473 7.864 2.473 9.432.002 14.59-8.234 14.59-15.38z"
                            fill="#0C0C17"
                            fillRule="evenodd"
                          />
                        </svg>
                        <span>Share to Twitter</span>
                      </button>
                    </li>
                    <li className={s.shareSheetItem}>
                      <button className={s.shareSheetButton} type="button">
                        <svg width="25" height="25">
                          <path
                            d="M8.838 23.488a5.191 5.191 0 0 1-7.326 0 5.192 5.192 0 0 1 0-7.326l5.372-5.372a5.191 5.191 0 0 1 7.325 0 1.034 1.034 0 0 1-.73 1.778 1.035 1.035 0 0 1-.735-.313 3.078 3.078 0 0 0-4.394 0l-5.372 5.372a3.078 3.078 0 0 0 0 4.394 3.078 3.078 0 0 0 4.395 0l5.127-5.127a1.04 1.04 0 0 1 1.778.73 1.035 1.035 0 0 1-.313.735l-5.127 5.127v.002zm9.278-9.28a5.191 5.191 0 0 1-7.325 0 1.036 1.036 0 1 1 1.465-1.464 3.078 3.078 0 0 0 4.394 0l5.372-5.372a3.078 3.078 0 0 0 0-4.395 3.078 3.078 0 0 0-4.395 0L12.5 8.105a1.035 1.035 0 0 1-1.476.01 1.04 1.04 0 0 1-.303-.74 1.04 1.04 0 0 1 .314-.735l5.127-5.128a5.191 5.191 0 0 1 7.326 0 5.192 5.192 0 0 1 0 7.326l-5.372 5.372v-.001z"
                            fill="#0C0C17"
                            fillRule="nonzero"
                          />
                        </svg>
                        <span>Copy Link</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className={s.shareSheetFooter}>
                  <button
                    className={s.shareSheetCancel}
                    type="button"
                    onClick={() => this.shareSheetClose()}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
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
                          s.skeletonHeroDate
                        )}
                      />
                      <div
                        className={cx(
                          s.skeleton,
                          s.skeletonPrimary,
                          s.skeletonHeroAuthor
                        )}
                      />
                    </div>
                  </div>
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
                <div className={s.contentsSummary}>
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonContentsSummaryFirst
                    )}
                  />
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonContentsSummarySecond
                    )}
                  />
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonContentsSummaryThird
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

export default withStyles(s)(Story);
