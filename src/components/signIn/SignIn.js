import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import firebase from "../../firebase";

import { Modal } from "react-bootstrap";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      form: true,
      alert: false,
    };
  }

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  setUpReCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log("captcha resolved");
          this.onSignInSubmit();
        },
      }
    );
  };

  onSignInSubmit = (e) => {
    e.preventDefault();
    this.setUpReCaptcha();
    // let phoneNumber = "+91" + this.state.mobile;
    let phoneNumber = "+91" + this.state.mobile;

    // var phoneNumber = "+911234567899";
    console.log(phoneNumber);
    var appVerifier = window.recaptchaVerifier;

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // console.log(confirmationResult);
        console.log("OTP is sent");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  onSubmitOtp = (e) => {
    e.preventDefault();
    let otpInput = this.state.otp;
    let optConfirm = window.confirmationResult;
    // console.log(codee);
    optConfirm
      .confirm(otpInput)
      .then(function (result) {
        // User signed in successfully.
        console.log("Result" + result.verificationID);
        let user = result.user;
        console.log(user);
      })
      .catch(function (error) {
        console.log(error);
        alert("Incorrect OTP");
      });
  };
  render() {
    return (
      <Modal.Body>
        <div>
          <Container
            style={{ display: "flex", flex: "1", flexDirection: "column" }}
          >
            <h4 style={{ alignSelf: "center" }}> Sign In</h4>

            <Row className="justify-content-center">
              <Col>
                <Form className="form" onSubmit={this.onSignInSubmit}>
                  <div id="recaptcha-container"></div>
                  <Form.Group
                    style={{  
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: " center",
                    }}
                  >
                    <Form.Control
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      style={{ width: "60%" }}
                      onChange={this.onChangeHandler}
                      required
                    />
                    <span
                      onClick={this.onSignInSubmit}
                      style={{
                        fontSize: "12px",
                        marginLeft: "-55px",
                        color: "blue",
                        cursor: "pointer",
                      }}
                    >
                      Send OTP
                    </span>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col>
                <Form className="form" onSubmit={this.onSubmitOtp}>
                  <Form.Group
                    style={{
                      display: "flex",
                      flex: "1",
                      justifyContent: " center",
                      alignItems: "center",
                    }}
                  >
                    <Form.Control
                      id="otp"
                      type="text"
                      name="otp"
                      style={{
                        width: "60%",
                      }}
                      placeholder="OTP"
                      onChange={this.onChangeHandler}
                    />
                  </Form.Group>
                  <div
                    className="submitBtn"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button button="submit" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </Modal.Body>
    );
  }
}

export default SignIn;
