import { useState } from "react";
import "./App.css";
import Login from "./Login";
import Registration from "./Registration";

function App() {
  const [authView, setAuthView] = useState("login");
  return (
    <>
      <div className="container-fluid my-2">
        {authView === "login" && <Login setAuthView={setAuthView} />}
        {authView === "register" && <Registration setAuthView={setAuthView} />}
      </div>
    </>
  );
}

export default App;
