import React, { Component } from "react";
import Registeration from "./RegisterationComponent";
import { USERS } from "../shared/users";
import UserDetails from "./UserdetailsComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import SideNavv from "./SidebarComponent";
import { baseUrl } from "../shared/baseUrl";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: USERS,
    };
  }
  
 // componentDidMount() {
    //fetch(baseUrl + "residents")
      //.then((response) => response.json())
     // .then((residents) => this.setState({ users:residents }));
 // }
  render() {
    return (
      <div class="full">
        <Header />
        <div className="row row-margin">
          <Switch>
            <div className="col-md">
              <Route path="/register" component={Registeration} />
              <Route
                exact
                path="/user"
                component={() => (
                  <UserDetails
                    user={
                       this.state.users.filter(
                        (user) => user.Registerednum === "UP15AZ3047"
                      )[0]
                    }
                  />
                )}
              />
              <Redirect to="/register" />
            </div>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
