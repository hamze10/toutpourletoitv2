import React, { Component } from "react";
import { auth } from "../../lib/firebase";
import Login from "./Login";
import Home from "./Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount = () => {
    auth.onAuthStateChanged((user) => {
      this.setState({
        user: user,
      });
    });
  };

  render() {
    const { user } = this.state;
    return (
      <>
        {!!user && <Home />}
        {!user && <Login />}
      </>
    );
  }
}

export default App;
