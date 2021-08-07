import React, { Component } from "react";
import { connect } from "redux-form";
import { Field, reduxForm } from "redux-form";

//TODO initialize redux form, maybe remove keys and change the select,
//TODO Fix a reducer that creates the prize for the box based on country box weight * country multiplier
const countryOptions = [
  {
    label: "Sweden",
    key: "sweden",
    value: "sweden",
  },

  {
    label: "China",
    key: "china",
    value: "china",
  },

  {
    label: "Brazil",
    key: "brazil",
    value: "brazil",
  },

  {
    label: "Australia",
    key: "australia",
    value: "australia",
  },
];

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
    console.log(value);
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    console.log(this.state.receivername + " " + this.state.boxweight);
    let box = {
      receiver: this.state.receiver,
      weight: this.state.boxweight,
      color: this.state.boxcolour,
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
              {countryOptions.map((countryOptions) => (
                <option value={countryOptions.value}>
                  {countryOptions.label}
                </option>
              ))}
            </select>
          </label>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default BoxForm;
