import React, { Component } from "react";
import Registeration from "./RegisterationComponent";
import { USERS } from "../shared/users";
import UserDetails from "./UserdetailsComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./FooterComponent";

import Mycomponent from "./SidebarComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: USERS,
    };
  }

  render() {
    return (
      <div>
        <div className="row ">
          <div className="col-12 col-md-2 sidebar full">
            <Mycomponent />
          </div>
          <Switch>
            <div className="col-md-9  full">
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
