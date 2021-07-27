import React, { Component } from "react";

class BoxForm extends Component {
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
