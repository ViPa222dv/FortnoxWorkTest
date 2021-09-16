import React, { Component, useState } from "react";
import "./componentsStyle.less";
import ListData from "./listData";
import "../App.less";

//I had no time to add the actuall styling to the application, but I managed to make most of the core functions to work.
class PlayerList extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Length</th>
              <th>Weight</th>
              <th>Club</th>
              <th>Position</th>
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

export default PlayerList;
