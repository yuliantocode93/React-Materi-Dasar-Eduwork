import React from "react";

class Conditional extends React.Component {
  state = {
    isLoading: true,
  };
  render() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2000);
    // const isLogin = true;
    // let message = "";
    // if (isLogin) {
    //   message = "anda sudah login";
    // } else {
    //   message = "anda belum login";
    // }
    // return <div>{isLogin ? <h1>Anda sudah login</h1> : <h1>Anda belum login</h1>}</div>;
    return <div>{this.state.isLoading ? <h1>Loading...</h1> : <h1>Anda sudah login</h1>}</div>;
  }
}

export default Conditional;
