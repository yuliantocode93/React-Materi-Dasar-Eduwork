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
    email: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`
      email: ${this.state.email},
      password: ${this.state.password}
    `);
    this.setState({
      email: "",
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
          <Input label="Email" type="text" name="email" onChange={(Value) => this.setState({ email: Value })} />
          <Input label="Password" type="password" name="password" onChange={(Value) => this.setState({ password: Value })} />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Validation;
