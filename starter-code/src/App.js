import React, { Component } from "react";
import Barra from "./components/Navbar";
import Form from "./components/Form";
import CoolButton from "./components/CoolButton";
import "./App.css";

import Signup from "./Signup.js";

class App extends Component {
  render() {
    return (
      <div>
        <Barra />
        <Form label="Name" type="text" placeholder="e.g Alex Smith" />
        <Form
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <CoolButton isSmall isDanger className="is-rounded my-class" nombre="boton 1" />
        <CoolButton isSmall isSuccess nombre="boton 2" />
        
        <Signup />
      </div>
    );
  }
}

export default App;
