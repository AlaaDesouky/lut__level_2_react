import React, { Component } from "react";
import { UserContext } from "./UserContext";

export class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <div>
            <h2>User Info</h2>
            <h3>{context.user.name}</h3>
            <h4>{context.user.email}</h4>
            <button onClick={context.logout}>Hide Info</button>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default User;
