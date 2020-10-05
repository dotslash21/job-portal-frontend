import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Hi Visitor,</h1>
        <p>
          Welcome to the Job Portal! You can post jobs or search for jobs here.
        </p>
        <p>Don't have an account yet?</p>
        <p>
          <Link to="/signup">
            <Button variant="primary">Get Started</Button>
          </Link>
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Home;
