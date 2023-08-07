/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import SearchResults from "./SearchResults";
import Page from "../../components/Page";

import data from "../../data/sample_json.json";

async function action() {
  return {
    title: "Search Results - (Keywords)",
    chunks: ["search-results"],
    component: (
      <Page>
        <SearchResults story={data.result} />
      </Page>
    )
  };
}

export default action;
