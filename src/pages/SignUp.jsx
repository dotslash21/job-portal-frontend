import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const SignUp = () => {
  return (
    <Container>
      <Form className="mt-5">
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up as User
        </Button>
        {' '}
        <Button variant="primary" type="submit">
          Sign Up as Recruiter
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
