import React, { useState } from "react";
import { useHistory } from "react-router";
import { Col, Container, Row, Button, Alert } from "reactstrap";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { currentUser, logout, username } = useAuth();
  const [error, setError] = useState();
  const history = useHistory();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      setError("");
      await logout();
      history.push("/");
    } catch {
      setError("Failed to logout");
    }
  };

  return (
    <Container fluid={true} className="justify-content-start text-left">
      {currentUser ? (
        <div>
          {error && <Alert color="danger">{error}</Alert>}
          <h2>Welcome {username}</h2>
          <h6>Your unique id is {currentUser.uid}</h6>
          <p className="lead">
            Social C is a private platform to be used with the closest of
            people. You'll be able to share Bucket Lists to fulfill together
            (to-do page), share memories, and many more things! As of now, just
            the To Do functionality works, so make shure to give it a try!
          </p>
          <Button onClick={handleLogout}>Log Out</Button>
        </div>
      ) : (
        <Row>
          <Col
            md={{ size: 4, offset: 4 }}
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
