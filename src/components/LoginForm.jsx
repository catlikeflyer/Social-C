import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button, Card, Form, FormGroup, Label, Input, Alert } from "reactstrap";

const LoginForm = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [load, setLoad] = useState();
  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);

    try {
      setError("");
      setLoad(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in! Try again");
    }
    setLoad(false);
  };

  return (
    <Card style={{ padding: "5px" }}>
      <h2>Log in to Social-C!</h2>
      {error && <Alert color="danger">{error}</Alert>}
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Email"
            innerRef={emailRef}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
            innerRef={passwordRef}
          />
        </FormGroup>

        <Button disabled={load} onClick={handleSubmit}>
          Log In
        </Button>
        <p>
          Need an account? <Link to="/signup">Sign Up</Link>
        </p>
      </Form>
    </Card>
  );
};

export default LoginForm;
