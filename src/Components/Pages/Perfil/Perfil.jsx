import React from "react";
import { History } from "../../../Helpers/History";
import {
  PerfilPage,
  InformationData,
  NewRegistrationButton
} from "./PerfilStyles";
import MaglioMendes from "../Magliomendes/Magliomendes";

export default class Perfil extends React.Component {
  componentDidMount = () => {
    this.setState(History.location.state);
    setTimeout(
      function() {
        if (!this.state) {
          this.handleNewRegistration();
        }
      }.bind(this),
      1
    );
  }

  handleNewRegistration = e => {
    History.push("/Register", {});
  };

  render() {
    return (
      <>
        {this.state && this.state.name && (
          <PerfilPage>
            <section>
              <InformationData>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={this.state.name}
                  tabIndex="1"
                  readOnly
                />
              </InformationData>
              <InformationData>
                <label htmlFor="nickname">Nickname</label>
                <input
                  type="text"
                  id="nickname"
                  name="nickname"
                  value={this.state.nickname}
                  tabIndex="2"
                  readOnly
                />
              </InformationData>
              <InformationData>
                <label htmlFor="age">Age</label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  value={this.state.age}
                  tabIndex="3"
                  readOnly
                />
              </InformationData>
              <InformationData>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={this.state.email}
                  tabIndex="4"
                  readOnly
                />
              </InformationData>

              <NewRegistrationButton
                onClick={() => this.handleNewRegistration()}
                aria-label="New register"
                tabIndex="5"
              />
            </section>
            <MaglioMendes step="" />
          </PerfilPage>
        )}
      </>
    );
  }
}
