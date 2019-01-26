import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Toggle } from "Utilities";
import { Modal } from "Elements";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <Toggle>
            {({ on, toggle }) => (
              <>
                {on && <h1>Hello Toggle from Render Props</h1>}
                <button onClick={toggle}>Show/Hide</button>
                <Portal>{on && <h1>Hi, I'm in a Portal</h1>}</Portal>
              </>
            )}
          </Toggle> */}
          <Toggle>
            {({ on, toggle }) => (
              <>
                <button onClick={toggle}>Login</button>
                <Modal on={on} toggle={toggle}>
                  <h1>Hi there, I'm in a Modal</h1>
                </Modal>
              </>
            )}
          </Toggle>
        </header>
      </div>
    );
  }
}

export default App;
