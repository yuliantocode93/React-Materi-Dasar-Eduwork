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

const showErrors = (errors) => {
  return (
    <div>
      <ul style={{ color: "red", marginLeft: "-10px" }}>
        {errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
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
    const { email, password } = this.state;
    let message = [];

    if (email.length === 0) {
      message = [...message, "email harus diisi"];
    }

    if (password.length === 0) {
      message = [...message, "password harus diisi"];
    }

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      message = [...message, "email tidak valid"];
    }

    if (password.length < 8) {
      message = [...message, "password minimal 8 karakter"];
    }

    if (message.length > 0) {
      this.setState({ errors: message });
    } else {
      alert(`email : ${email}, password : ${password}`);
      this.setState({ errors: [] });
    }
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
        {this.state.errors && showErrors(this.state.errors)}
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
