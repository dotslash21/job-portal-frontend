import React from "react";
import { Container, Form, FormControl, Button, Card } from "react-bootstrap";

const ViewJobs = () => {
  return (
    <Container>
      <section className="d-flex justify-content-center mt-5 mb-2" id="filter">
        <Form inline>
          <Form.Label htmlFor="location" srOnly>
            Location
          </Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2"
            id="location"
            placeholder="Location"
          />

          <Form.Label htmlFor="skill1" srOnly>
            Skills
          </Form.Label>
          <FormControl
            className="mb-2 mr-sm-2"
            id="skill1"
            placeholder="Skill 1"
          />

          <Form.Label htmlFor="skill2" srOnly>
            Skills
          </Form.Label>
          <FormControl
            className="mb-2 mr-sm-2"
            id="skill2"
            placeholder="Skill 2"
          />

          <Form.Label htmlFor="skill3" srOnly>
            Skills
          </Form.Label>
          <FormControl
            className="mb-2 mr-sm-2"
            id="skill3"
            placeholder="Skill 3"
          />

          <Button type="submit" className="mb-2">
            Search
          </Button>
        </Form>
      </section>

      <section id="list">
        <Card>
          <Card.Body>
            <Card.Title>SDE-I</Card.Title>
            <Card.Subtitle>ACME Inc.</Card.Subtitle>
            <Card.Text>
              Engineer, design and develop scalable applications.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="d-flex justify-content-between">
              <span>Date Posted: 5/10/2020</span>
              <span>Last Date to apply: 5/12/2020</span>
            </div>
          </Card.Footer>
        </Card>
      </section>
    </Container>
  );
};

export default ViewJobs;
