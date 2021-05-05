import React, { useState } from "react";
import { useHistory } from "react-router";
import { Col, Container, Row, Button, Alert } from "reactstrap";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState();
  const history = useHistory();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      setError("");
      await logout();
      history.pushState("/");
    } catch {
      setError("Failed to logout");
    }
  };

  return (
    <Container fluid={true} className="justify-content-start text-left">
      {currentUser ? (
        <div>
          {error && <Alert color="danger">{error}</Alert>}
          <h2>{currentUser.email}</h2>
          <h2>{currentUser.uid}</h2>
          <Button onClick={handleLogout}>Log Out</Button>
        </div>
      ) : (
        <Row>
          <Col
            md={{ size: 3, offset: 1 }}
            sm="12"
            style={{ height: "50vh", paddingTop: "10px" }}
            className="align-middle"
          >
            <LoginForm />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Home;
