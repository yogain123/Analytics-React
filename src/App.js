import React, { useEffect } from "react";
import ReactGa from "react-ga";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    ReactGa.initialize("UA-171681373-1");
    ReactGa.pageview("/");
  }, []);

  const clickMe = () => {
    ReactGa.event({
      category: "Button",
      action: "Click the button from / page",
    });
    alert("Send Information to Google Analytics");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <button type="button" onClick={() => clickMe()}>
          Send Analytics
        </button>
      </header>
    </div>
  );
}

export default App;
