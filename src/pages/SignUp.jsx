import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      username: null,
      password: null,
      role: null,
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onRoleChange = this.onRoleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onEmailChange(event) {
    const value = event.target.value;
    this.setState({ email: value === "" ? null :  value });
  }

  onUserNameChange(event) {
    const value = event.target.value;
    this.setState({ username: value === "" ? null :  value });
  }

  onPasswordChange(event) {
    const value = event.target.value;
    this.setState({ password: value === "" ? null :  value });
  }

  onRoleChange(event) {
    const value = event.target.value;
    this.setState({ role: value === "" ? null :  value });
  }

  onSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Container>
          <Form className="mt-5" onSubmit={this.onSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={this.onEmailChange} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" onChange={this.onUserNameChange} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={this.onPasswordChange} />
            </Form.Group>
            <Button variant="primary" type="submit" value="user" onClick={this.onRoleChange}>
              Sign Up as User
            </Button>{" "}
            <Button variant="primary" type="submit" value="recruiter" onClick={this.onRoleChange}>
              Sign Up as Recruiter
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default SignUp;
