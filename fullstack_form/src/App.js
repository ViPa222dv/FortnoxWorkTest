import React, { Component } from "react";
import "./App.css";
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
              <NavLink to="add_players">Form</NavLink>
            </li>
            <li>
              <NavLink to="player_list">List</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route path="/add_players" component={PlayerForm} />
            <Route path="/player_list" component={PlayerList} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
