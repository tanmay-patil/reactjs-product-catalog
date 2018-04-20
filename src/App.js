import React, { Component } from 'react';
import './App.css';

import Main from "./components/containerComponents/Main";

class App extends Component {

  render() {
    return (
      <div>
        {/* <HelloWorld name="Tanmay Patil" />
        <ToggleButton />
        <NameForm /> */}
        <Main />
      </div>
    );
  }
}

export default App;
