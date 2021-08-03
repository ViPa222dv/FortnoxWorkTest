import React, { Component } from "react";

const countryOptions = [
  {
    label: "Sweden",

    value: "sweden",
  },

  {
    label: "China",

    value: "china",
  },

  {
    label: "Brazil",

    value: "brazil",
  },

  {
    label: "Australia",

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
      boxcolour: "",
      receivercountry: "china",
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
    console.log(value);
  }
  handleSubmit(event) {
    alert("A box was submitted: " + this.state.receivercountry);
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
              value={this.state.value}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Country
            <select
              name="receivercountry"
              value={this.state.value}
              onChange={this.handleChange}
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
