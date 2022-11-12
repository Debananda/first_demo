import { useState } from "react";
import "./App.css";
import Registration from "./Registration";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const onUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const onLogin = (event) => {
    event.preventDefault();
    if (userName === "admin" && password === "admin") {
      alert("Success");
    } else {
      alert("Failure");
    }
  };
  return (
    <div className="container-fluid my-2">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-light">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmit={onLogin}>
                <div className="form-group mb-2">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    name="userName"
                    value={userName}
                    onChange={onUserNameChange}
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
                  <button className="btn btn-link" type="button">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
