import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const onLogin = (event) => {
    event.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDByavGaIfEbfo-Vx76OjYDWH4s7T1hUYU",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    )
      .then((data) => data.json())
      .then((result) => {
        console.log(result);
        if (result.error) {
          alert(result.error.message);
        } else {
          localStorage.setItem("auth", JSON.stringify(result));
          navigate("/");
        }
      });
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card bg-light">
          <div className="card-header">Login</div>
          <div className="card-body">
            <form onSubmit={onLogin}>
              <div className="form-group mb-2">
                <label className="form-label">Username</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onEmailChange}
                  className="form-control"
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onPasswordChange}
                  className="form-control"
                />
              </div>
              <div className="d-grid mt-2">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-2 text-muted">
                New to Library? Please
                <Link className="btn btn-link" to="/register">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
