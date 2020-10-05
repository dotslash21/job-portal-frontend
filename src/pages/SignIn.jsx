import React, { Component } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom'
import { withSignIn } from "react-auth-kit";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
    };

    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  signInHandler(username, password) {
    axios({
      method: "post",
      url: "http://localhost:8080/auth/signin",
      data: {
        username: username,
        password: password,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          this.props.signIn({
            token: response.data.token,
            expiresIn: 1440,
            tokenType: response.data.type,
            authState: {
              id: response.data.id,
              email: response.data.email,
              username: response.data.username,
              roles: response.data.roles,
            },
          });
          console.log("[SUCCESS] Authentication successful!")
          this.props.history.push("/");
        } else {
          console.log(response);
          alert(
            "Error! Authentication failed please check the username and password and try again."
          );
        }
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Error! Authentication failed please check the username and password and try again."
        );
      });
  }

  onUserNameChange(event) {
    const value = event.target.value;
    this.setState({ username: value === "" ? null : value });
  }

  onPasswordChange(event) {
    const value = event.target.value;
    this.setState({ password: value === "" ? null : value });
  }

  onSubmit(event) {
    this.signInHandler(this.state.username, this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <Form className="mt-5" onSubmit={this.onSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={this.onUserNameChange}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.onPasswordChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(withSignIn(SignIn));
