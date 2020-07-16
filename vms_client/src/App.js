import React, { Component } from "react";
import UserDetails from "./components/UserdetailsComponent";
import "./App.css";
import Registeration from "./components/RegisterationComponent";
import { USERS } from "./shared/users";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: USERS,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
