import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import Home from "./Home";
import Header from "./common/Header";

function App() {
  const authString = localStorage.getItem("auth");
  let auth;
  if (authString) {
    auth = JSON.parse(authString);
  }
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container-fluid my-2">
          <Routes>
            <Route path="/" element={auth ? <Home /> : <Login />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Registration />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
