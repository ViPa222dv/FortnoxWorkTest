import React, { Component } from "react";
import "../assets/less/formStyle.less";

class FootballForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiver: "",
      age: "",
      country: "finland",
      brand: "Select",
      size: "4",
      colors: "goalkeeper",
    };
    this.inputValidation = this.inputValidation.bind(this);
    this.createPlayer = this.createPlayer.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  inputValidation() {
    let age = document.forms["ballform"]["age"].value;
    if (age <= 15) {
      this.setState({
        weight: 0,
      });
      alert("A customer can't be younger than 15 years old!");
      return false;
    }
    return true;
  }

  createBall() {
    let ball = {
      receiver: this.state.receiver,
      age: this.state.age,
      country: this.state.country,
      brand: this.state.brand,
      size: this.state.size,
      colors: this.state.colors,
    };
    return ball;
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
            Age
            <input
              name={"age"}
              type={"number"}
              required
              value={this.state.age}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Country
            <select
              name={"country"}
              value={this.state.country}
              onChange={this.handleInputChange}
            >
              <option value="sweden">Sweden</option>
              <option value="denmark">Denmark</option>
              <option value="finland">Finland</option>
              <option value="norway">Norway</option>
            </select>
          </label>
          <br />
          <label>
            Brand
            <select
              name={"brand"}
              value={this.state.brand}
              onChange={this.handleInputChange}
            >
              <option value="adidas">Adidas</option>
              <option value="nike">Nike</option>
              <option value="puma">Puma</option>
              <option value="select">Select</option>
            </select>
          </label>
          <br />
          <label>
            Size
            <select
              name={"size"}
              value={this.state.size}
              onChange={this.handleInputChange}
            >
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <br />
          <label>
            Colors
            <select
              name={"color"}
              value={this.state.color}
              onChange={this.handleInputChange}
            >
              <option value="blackwhite">Black and white</option>
              <option value="whiteblue">White and Blue</option>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="red">Red</option>
            </select>
          </label>
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default FootballForm;
