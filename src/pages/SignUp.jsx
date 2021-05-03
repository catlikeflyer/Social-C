import React from "react";
import { Redirect } from "react-router";
import { Col, Container, Row } from "reactstrap";
import SignupForm from "../components/SignupForm";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Redirect to="/"></Redirect>
  ) : (
    <Container fluid={true} className="justify-content-start text-left">
      <Row>
        <Col
          md={{ size: 4, offset: 5 }}
          sm="12"
          style={{ height: "50vh", paddingTop: "10px" }}
          className="align-middle"
        >
          <SignupForm />
        </Col>
      </Row>
      )
    </Container>
  );
};

export default Signup;
