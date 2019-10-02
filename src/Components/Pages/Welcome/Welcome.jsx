import React from "react";
import { WelcomePage } from "./WelcomeStyles";
import { History } from "../../../Helpers/History";

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.handleChangeRoute()
  }

  handleChangeRoute() {
    setTimeout(
      function() {
        History.push("/Register");
      }.bind(this),
      3000
    );
  }

  render() {
    return (
      <WelcomePage>
        <span>Dynamic Register</span>
      </WelcomePage>
    );
  }
}
