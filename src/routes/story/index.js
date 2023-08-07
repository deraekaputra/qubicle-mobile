/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import Story from "./Story";
import Layout from "../../components/Layout";

import data from "../../data/sample_json.json";

async function action() {
  return {
    title: "Qubicle - Story",
    chunks: ["story"],
    component: (
      <Layout>
        <Story story={data.result} />
      </Layout>
    )
  };
}

export default action;
