import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Registration extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleRegistration = (event) => {
    event.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDByavGaIfEbfo-Vx76OjYDWH4s7T1hUYU",
      {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          returnSecureToken: false,
        }),
      }
    )
      .then((data) => data.json())
      .then((result) => {
        if (result.error) {
          alert(result.error.message);
        } else {
          this.updateProfile(
            result.idToken,
            `${this.state.firstName} ${this.state.lastName}`,
            "",
            ["PHOTO_URL"]
          );
        }
      });
  };
  updateProfile = (idToken, displayName, photoUrl, deleteAttribute) => {
    return fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDByavGaIfEbfo-Vx76OjYDWH4s7T1hUYU",
      {
        method: "POST",
        body: JSON.stringify({
          idToken,
          displayName,
          photoUrl,
          deleteAttribute,
          returnSecureToken: false,
        }),
      }
    );
  };
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Registration</div>
            <div className="card-body">
              <form className="row" onSubmit={this.handleRegistration}>
                <div className="col-md-6 mb-2">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    value={this.state.firstName}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    value={this.state.lastName}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="col-12 mb-2">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    value={this.state.confirmPassword}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary">Save</button>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-2 text-muted">
                  Go to
                  <Link className="btn btn-link" to="/login">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
