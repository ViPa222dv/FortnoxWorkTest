import React, { Component } from "react";
import "./App.less";
import { Route, NavLink, HashRouter } from "react-router-dom";
import BoxForm from "./components/form";
import BoxList from "./components/list";
//import TestForm from "./components/formTest";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <ul className="nav">
            <li>
              <NavLink to="addbox">Form</NavLink>
            </li>
            <li>
              <NavLink to="listboxes">List</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route path="/addbox" component={BoxForm} />
            <Route path="/listboxes" component={BoxList} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
