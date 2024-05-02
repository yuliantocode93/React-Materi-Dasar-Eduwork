import React from "react";

const Input = ({ label, type, name, onChange }) => {
  return (
    <div>
      <label>
        {label}:
        <br />
        <input type={type} name={name} onChange={(e) => onChange(e.target.value)} />
        <br />
      </label>
    </div>
  );
};

class Validation extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`
      username: ${this.state.username},
      password: ${this.state.password}
    `);
    this.setState({
      username: "",
      password: "",
    });
  };
  render() {
    const style = {
      width: "400px",
      margin: "100px auto 0",
      border: "1px solid black",
      padding: "10px",
    };
    return (
      <div style={style}>
        <h4>Login Page</h4>
        <form onSubmit={this.handleSubmit}>
          <Input label="Username" type="text" name="username" onChange={(Value) => this.setState({ username: Value })} />
          <Input label="Password" type="password" name="password" onChange={(Value) => this.setState({ password: Value })} />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Validation;
