import React, { Component } from "react";
import hexRgb from "hex-rgb";
//TODO initialize redux form, maybe remove keys and change the select,
//TODO Fix a reducer that creates the prize for the box based on country box weight * country multiplier
class PlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: "",
      length: "",
      weight: "",
      club: "",
      position: "goalkeeper",
    };
    this.inputValidation = this.inputValidation.bind(this);
    this.createBox = this.createPlayer.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  inputValidation() {
    let weight = document.forms["playerform"]["weight"].value;
    if (weight <= 0) {
      this.setState({
        boxweight: 0,
      });
      alert("A player can't weigth 0 or less, try again!");
      return false;
    }
    return true;
  }

  createPlayer() {
    let player = {
      receiver: this.state.receiver,
      length: this.state.length,
      weight: this.state.weight,
      club: this.state.club,
      position: this.state.position,
    };
    return player;
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    if (this.inputValidation()) {
      let box = this.createBox();

      //Post does not work correctly currently, did not have time to find out exactly what did not work, but in the alert you can see that the data
      //that is getting sent is the one that should be sent.
      /*const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          console.log(this.responseText);
        } else if (this.readyState === 4 && this.status <= 400) {
          console.log(this.responseText);
        }
      };
      xhttp.open("Post", "http://localhost:8080/api/box/add_box", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify(box));

      alert(JSON.stringify(box));
      event.preventDefault();*/
    } else {
      event.preventDefault();
    }
  }
  render() {
    return (
      <div>
        <form name={"playerform"} onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              name={"name"}
              type={"text"}
              required
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Length
            <input
              name={"length"}
              type={"number"}
              required
              value={this.state.length}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <br />
          <label>
            Weigth
            <input
              name={"weigth"}
              type={"number"}
              required
              value={this.state.weight}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Club
            <input
              name={"club"}
              type={"text"}
              required
              value={this.state.weight}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Position
            <select
              name={"position"}
              value={this.state.position}
              onChange={this.handleInputChange}
            >
              <option value="goalkeeper">Goalkeeper</option>
              <option value="defender">Defender</option>
              <option value="midfielder">Midfielder</option>
              <option value="forward">Forward</option>
            </select>
          </label>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
