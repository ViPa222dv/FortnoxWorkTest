import React, { Component } from "react";
import hexRgb from "hex-rgb";

//TODO initialize redux form, maybe remove keys and change the select,
//TODO Fix a reducer that creates the prize for the box based on country box weight * country multiplier
class BoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiver: "Jane Doe",
      boxweight: 3,
      //Fix last two values
      boxcolour: "#0000ff",
      receivercountry: "sweden",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //TODO Fix convertion from hex to rgb
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    const rgbColor = hexRgb(this.state.boxcolour);
    let box = {
      receiver: this.state.receiver,
      weight: this.state.boxweight,
      red: rgbColor.red,
      green: rgbColor.green,
      blue: rgbColor.blue,
      country: this.state.receivercountry,
    };
    alert(JSON.stringify(box));
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              name="receiver"
              type="text"
              value={this.state.receiver}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Weight
            <input
              name="boxweight"
              type="number"
              value={this.state.boxweight}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Box colour
            <input
              name="boxcolour"
              type="color"
              value={this.state.boxcolour}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Country
            <select
              name="receivercountry"
              value={this.state.receivercountry}
              component="select"
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
