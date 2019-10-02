import * as React from "react";
import { Router, Route, Redirect } from "react-router-dom";

import Register from "../Pages/Register/Register";
import { History } from "../../Helpers/History";
import Perfil from "../Pages/Perfil/Perfil";

export default class Content extends React.Component {
  render() {
    return (
      <Router history={History}>
        <Route path="/Register" component={Register} />
        <Route path="/Perfil" exact component={Perfil} />
        <Redirect from="/" to="/Register" exact />
      </Router>
    );
  }
}
