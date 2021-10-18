import React, { Component } from "react";
import "../assets/less/formStyle.less";

class PlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      length: "",
      weight: "",
      club: "",
      position: "goalkeeper",
    };
    this.inputValidation = this.inputValidation.bind(this);
    this.createPlayer = this.createPlayer.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  inputValidation() {
    let weight = document.forms["playerform"]["weight"].value;
    if (weight <= 0) {
      this.setState({
        weight: 0,
      });
      alert("A player can't weigth 0 or less, try again!");
      return false;
    }
    return true;
  }

  createPlayer() {
    let player = {
      name: this.state.name,
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
      let player = this.createPlayer();

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
        <form name={"ballform"} onSubmit={this.handleSubmit}>
          <label>
            Receiver
            <input
              name={"receiver"}
              type={"text"}
              required
              value={this.state.receiver}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Country
            <input
              name={"country"}
              type={"text"}
              required
              value={this.state.country}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Brand
            <input
              name={"brand"}
              type={"text"}
              required
              value={this.state.brand}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Size
            <input
              name={"size"}
              type={"number"}
              required
              value={this.state.size}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Weigth
            <input
              name={"weigth"}
              type={"number"}
              required
              value={this.state.weigth}
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
              value={this.state.club}
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
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
