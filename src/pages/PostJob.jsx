import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const PostJob = () => {
  return (
    <Container>
      <Form className="mt-5">
        <Form.Group controlId="job_title">
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="text" placeholder="Enter job title" />
        </Form.Group>
        <Form.Group controlId="company">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" placeholder="Enter company name" />
        </Form.Group>
        <Form.Group controlId="job_description">
          <Form.Label>Job Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter job description"
          />
        </Form.Group>
        <Form.Group controlId="skills">
          <Form.Label>Skills</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter key skills seperated by commas"
          />
        </Form.Group>
        <Form.Group controlId="expiresAfter">
          <Form.Label>Expires After</Form.Label>
          <Form.Control type="number" placeholder="60" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Post Job
        </Button>
      </Form>
    </Container>
  );
};

export default PostJob;
