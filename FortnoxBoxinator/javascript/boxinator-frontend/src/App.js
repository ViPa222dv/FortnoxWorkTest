import React, { Component } from "react";
import "./App.less";
import { Route, NavLink, HashRouter } from "react-router-dom";
import PlayerForm from "./components/form";
import PlayerList from "./components/list";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <ul class="nav">
            <li>
              <NavLink to="addplayer">Form</NavLink>
            </li>
            <li>
              <NavLink to="playerlist">List</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route path="/addplayer" component={PlayerForm} />
            <Route path="/playerlist" component={PlayerList} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
