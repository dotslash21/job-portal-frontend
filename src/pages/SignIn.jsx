import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const SignIn = () => {
  return (
    <Container>
      <Form className="mt-5">
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
