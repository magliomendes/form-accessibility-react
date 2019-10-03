import React from "react";
import { History } from "../../../Helpers/History";
import { RegisterPage } from "./RegisterStyles";
import {
  InputStepContent,
  Input,
  Label,
  BackButton,
  NextButton,
  SubmitButton,
  Content,
  TooltipContent,
  Tooltip,
  LoadingComponent
} from "./RegisterStyles";
import "./RegisterStyles.scss";
import fire from "./../../../fire";
import MaglioMendes from "../Magliomendes/Magliomendes";

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      name: "",
      nickname: "",
      age: "",
      email: "",
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = e => {
    this.setState({
      loading: true
    });
    let form = {
      name: this.state.name,
      nickname: this.state.nickname,
      age: this.state.age,
      email: this.state.email
    };
    fire
      .database()
      .ref("registrationForm")
      .push(form)
      .then(() => {
        setTimeout(
          function() {
            History.push("/Perfil", this.state);
            this.setState({
              loading: false
            });
          }.bind(this),
          500
        );
      });
  };

  changeStep = step => {
    this.setState({
      step: step
    });
  };

  stepValidation() {
    if (this.state.step === 1) {
      return this.state.name.length >= 2 && this.state.nickname.length >= 2;
    } else if (this.state.step === 2) {
      return (
        this.state.age >= 1 &&
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)
      );
    }
    return false;
  }

  render() {
    return (
      <RegisterPage className={this.state.loading ? "disabled" : {}}>
        <Content>
          {this.state.step <= 2 && (
            <InputStepContent
              className={this.state.step === 1 ? "actualStep" : "pastStep"}
            >
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                onChange={this.handleChange}
                autoComplete="off"
                tabIndex={this.state.step === 1 ? 1 : -1}
              />

              <Label htmlFor="nickname">Nickname</Label>
              <Input
                id="nickname"
                type="text"
                name="nickname"
                onChange={this.handleChange}
                autoComplete="off"
                tabIndex={this.state.step === 1 ? 2 : -1}
              />

              <div className="d-flex justify-content-between align-items-center flex-row-reverse">
                <NextButton
                  onClick={() => this.changeStep(2)}
                  disabled={!this.stepValidation()}
                  tabIndex={this.state.step === 1 ? 4 : -1}
                  aria-label="Next"
                ></NextButton>
                {!this.stepValidation() && this.state.step === 1 && (
                  <TooltipContent tabIndex={this.state.step === 1 ? 3 : -1}>
                    <Tooltip>
                      Name and Nickname must have at least 3 characters
                    </Tooltip>
                  </TooltipContent>
                )}
              </div>
            </InputStepContent>
          )}

          {this.state.step <= 3 && (
            <InputStepContent
              className={
                this.state.step === 2
                  ? "actualStep"
                  : this.state.step === 3
                  ? "pastStep"
                  : "nextStep"
              }
            >
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                name="age"
                min="1"
                onChange={this.handleChange}
                autoComplete="off"
                tabIndex={this.state.step === 2 ? 1 : -1}
              />

              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                name="email"
                onChange={this.handleChange}
                autoComplete="off"
                tabIndex={this.state.step === 2 ? 2 : -1}
              />

              <div className="d-flex justify-content-between align-items-center flex-row-reverse">
                <NextButton
                  onClick={() => this.changeStep(3)}
                  disabled={!this.stepValidation()}
                  tabIndex={this.state.step === 2 ? 5 : -1}
                  aria-label="Next"
                ></NextButton>

                {!this.stepValidation() && this.state.step === 2 && (
                  <TooltipContent tabIndex={this.state.step === 2 ? 3 : -1}>
                    <Tooltip>
                      Age must be higher than 1 and email must be like abc@abc.c
                    </Tooltip>
                  </TooltipContent>
                )}
                <BackButton
                  onClick={() => this.changeStep(1)}
                  tabIndex={this.state.step === 2 ? 4 : -1}
                  aria-label="Back"
                />
              </div>
            </InputStepContent>
          )}

          {this.state.step >= 2 && (
            <InputStepContent
              className={this.state.step === 3 ? "actualStep" : "nextStep"}
            >
              {!this.state.loading && (
                <div className="d-flex justify-content-between align-items-center flex-row-reverse">
                  <SubmitButton
                    onClick={() => this.handleSubmit()}
                    tabIndex={this.state.step === 3 ? 1 : -1}
                    aria-label="Submit informations"
                  />
                  <BackButton
                    onClick={() => this.changeStep(2)}
                    tabIndex={this.state.step === 3 ? 2 : -1}
                    aria-label="Back"
                  />
                </div>
              )}

              {this.state.loading && <LoadingComponent />}
            </InputStepContent>
          )}
        </Content>
        <MaglioMendes step={this.state.step} />
      </RegisterPage>
    );
  }
}
