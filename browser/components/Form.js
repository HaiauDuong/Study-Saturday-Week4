import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form>
        <label>First Name:</label>
        <input type="text" name="firstName" />
        <label> Last Name: </label>
        <input type="text" name="lastName" />
        <label> email </label>
        <input type="email" name="email" />

        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
