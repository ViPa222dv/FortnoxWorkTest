import React, { Component, useState } from "react";
import "./componentsStyle.less";
import ListData from "./listData";
import "../App.less";

//I had no time to add the actuall styling to the application, but I managed to make most of the core functions to work.
class BoxList extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Receiver</th>
              <th>Weight</th>
              <th>Box colour</th>
              <th>Shipping cost</th>
            </tr>
          </thead>
          <tbody>
            <ListData></ListData>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BoxList;
