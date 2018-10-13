import React, { Component } from "react";

export default class NewStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      email: ""
    });
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input onChange={this.handleChange} value={this.state.firstName}type="text" name="firstName" />
        </label>

        <label>
          Last Name:
          <input onChange={this.handleChange} value={this.state.lastName}type="text" name="lastName" />
        </label>

        <label>
          Email:
          <input onChange={this.handleChange} value={this.state.email}type="email" name="email" />
        </label>

        <button type="submit">Submit New Student</button>
      </form>
    );
  }
}
