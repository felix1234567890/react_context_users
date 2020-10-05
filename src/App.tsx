import React, { useContext, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { appContext } from "./context";
import { setLoading } from "./reducer/actions";

function App() {
  const { state: loading, dispatch } = useContext(appContext);
  useEffect(() => {
    console.log(loading);
    dispatch(setLoading());
  }, []);
  console.log(loading);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
