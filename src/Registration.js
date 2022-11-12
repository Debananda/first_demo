import React, { Component } from "react";

export default class Registration extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      phone: "",
      password: "",
      confirmPassword: "",
    };
  }
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="card">
        <div className="card-header">Registration</div>
        <div className="card-body">
          <form className="row">
            <div className="col-md-6 mb-2">
              <label>First Name</label>
              <input type="text" name="firstName" className="form-control" />
            </div>
            <div className="col-md-6 mb-2">
              <label>Last Name</label>
              <input type="text" name="lastName" className="form-control" />
            </div>
            <div className="col-md-6 mb-2">
              <label>Username</label>
              <input type="text" name="userName" className="form-control" />
            </div>
            <div className="col-md-6 mb-2">
              <label>Email</label>
              <input type="email" name="email" className="form-control" />
            </div>
            <div className="col-md-6 mb-2">
              <label>Phone Number</label>
              <input type="tel" name="phone" className="form-control" />
            </div>
            <div className="col-md-6 mb-2">
              <label>Password</label>
              <input type="password" name="passord" className="form-control" />
            </div>
            <div className="col-md-6 mb-2">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
              />
            </div>
            <div className="d-grid">
              <button className="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
