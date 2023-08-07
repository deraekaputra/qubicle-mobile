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
import serialize from "serialize-javascript";
import config from "../config";

/* eslint-disable react/no-danger */

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        cssText: PropTypes.string.isRequired
      }).isRequired
    ),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    app: PropTypes.object, // eslint-disable-line
    children: PropTypes.string.isRequired
  };

  static defaultProps = {
    styles: [],
    scripts: []
  };

  render() {
    const { title, description, styles, scripts, app, children } = this.props;
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover"
          />
          {scripts.map(script => (
            <link key={script} rel="preload" href={script} as="script" />
          ))}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            rel="apple-touch-startup-image"
            sizes="2048x2732"
            href="/apple_splash_2048.png"
          />
          <link
            rel="apple-touch-startup-image"
            sizes="1668x2224"
            href="/apple_splash_1668.png"
          />
          <link
            rel="apple-touch-startup-image"
            sizes="1536x2048"
            href="/apple_splash_1536.png"
          />
          <link
            rel="apple-touch-startup-image"
            sizes="1125x2436"
            href="/apple_splash_1125.png"
          />
          <link
            rel="apple-touch-startup-image"
            sizes="1242x2208"
            href="/apple_splash_1242.png"
          />
          <link
            rel="apple-touch-startup-image"
            sizes="750x1334"
            href="/apple_splash_750.png"
          />
          <link
            rel="apple-touch-startup-image"
            sizes="640x1136"
            href="/apple_splash_640.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#08080F" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Qubicle" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Qubicle" />
          <meta name="msapplication-TileColor" content="#08080F" />
          <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
          <meta name="theme-color" content="#08080f" />
          {styles.map(style => (
            <style
              key={style.id}
              id={style.id}
              dangerouslySetInnerHTML={{ __html: style.cssText }}
            />
          ))}
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          <script
            dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }}
          />
          {scripts.map(script => <script key={script} src={script} />)}
          {config.analytics.googleTrackingId && (
            <script
              dangerouslySetInnerHTML={{
                __html:
                  "window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;" +
                  `ga('create','${
                    config.analytics.googleTrackingId
                  }','auto');ga('send','pageview')`
              }}
            />
          )}
          {config.analytics.googleTrackingId && (
            <script
              src="https://www.google-analytics.com/analytics.js"
              async
              defer
            />
          )}
        </body>
      </html>
    );
  }
}

export default Html;
