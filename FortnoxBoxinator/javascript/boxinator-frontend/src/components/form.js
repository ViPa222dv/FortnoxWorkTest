import React, { Component } from "react";
import hexRgb from "hex-rgb";
//TODO initialize redux form, maybe remove keys and change the select,
//TODO Fix a reducer that creates the prize for the box based on country box weight * country multiplier
class BoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiver: "",
      boxweight: "",
      boxcolour: "#0000ff",
      receivercountry: "sweden",
      boxprize: 0,
    };
    this.inputValidation = this.inputValidation.bind(this);
    this.countryMultiplier = this.countryMultiplier.bind(this);
    this.createBox = this.createBox.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  inputValidation() {
    let weight = document.forms["boxform"]["boxweight"].value;
    if (weight <= 0) {
      this.setState({
        boxweight: 0,
      });
      alert("A box can't have 0 or negative weight, try again!");
      return false;
    }
    return true;
  }
  //TODO Remove this function and add it to the list instead, most likely better to 
  //send the pure data and then calculate it when we get it back from the db(box prize).
  countryMultiplier() {
    if (this.state.receivercountry === "sweden") {
      return 1.3;
    }
    else if (this.state.receivercountry === "china") {
      return 4.0;

    }
    else if (this.state.receivercountry === "brazil") {
      return 8.6;
    }
    else {
      return 7.2;
    }
  }
  createBox() {
    const rgbColor = hexRgb(this.state.boxcolour);
    let countryMultiplier = this.countryMultiplier();
    let boxprize = this.state.boxweight * countryMultiplier;
    let box = {
      receiver: this.state.receiver,
      weight: this.state.boxweight,
      red: rgbColor.red,
      green: rgbColor.green,
      blue: rgbColor.blue,
      country: this.state.receivercountry,
      boxprize: boxprize,
    };
    return box;
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
      alert(JSON.stringify(box));
      event.preventDefault();
    }
    else {
      event.preventDefault();
    }
  }
  render() {
    return (
      <div>
        <form name={"boxform"} onSubmit={this.handleSubmit}>
          <label>
            Name
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
            Weight
            <input
              name={"boxweight"}
              type={"number"}
              required
              value={this.state.boxweight}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Box colour
            <input
              name={"boxcolour"}
              type={"color"}
              required
              value={this.state.boxcolour}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Country
            <select
              name={"receivercountry"}
              value={this.state.receivercountry}
              onChange={this.handleInputChange}
            >
              <option value="sweden">Sweden</option>
              <option value="china">China</option>
              <option value="brazil">Brazil</option>
              <option value="australia"> Australia</option>
            </select>
          </label>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default BoxForm;
