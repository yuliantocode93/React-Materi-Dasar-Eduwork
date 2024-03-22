import React from "react";

class List extends React.Component {
  state = {
    users: ["a", "b", "c"],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
