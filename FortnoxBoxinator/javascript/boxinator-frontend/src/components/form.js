import React, { Component } from "react";

class BoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //TODO Fix convertion from hex to rgb
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("A box was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form>
          <label>
            Name
            <textarea name="receiver" type="checkbox" />
          </label>
          <br />
          <label>
            Weight
            <textarea name="boxweight" type="number" />
          </label>
          <br />
          <label>
            Box colour
            <input name="boxcolour" type="color" />
          </label>
          <br />
          <label>
            Country
            <select name="receivercountry">
              <option value="sweden">Sweden</option>
              <option value="china">China</option>
              <option value="brazil">Brazil</option>
              <option value="australia">Australia</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default BoxForm;
