import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Toggle } from "Utilities";
import { Modal } from "Elements";
import { UserContext } from "./components/UserContext";
import User from "./components/User";

class UserProvider extends Component {
  state = {
    id: "1",
    name: "Desouky",
    email: "test@gmail.com"
  };

  logout = () => {
    this.setState({
      id: null,
      name: "",
      email: ""
    });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
          logout: this.logout
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <User />
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
      </UserProvider>
    );
  }
}

export default App;
