import React, { Component, useState } from "react";
import ListData from "./listData";

//I had no time to add the actuall styling to the application, but I managed to make most of the core functions to work.
class PlayerList extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Receiver</th>
              <th>Country</th>
              <th>Brand</th>
              <th>Size</th>
              <th>Colors</th>
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
