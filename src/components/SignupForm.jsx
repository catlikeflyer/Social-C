import React, { useRef, useState } from "react";
import { Button, Form, FormGroup, Label, Input, Card, Alert } from "reactstrap";
import { useAuth } from "../contexts/AuthContext";
import {Link, useHistory} from "react-router-dom"

const SignupForm = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState();
  const [load, setLoad] = useState();
  const { signup } = useAuth();
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(emailRef.current.value)

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords don't match!");
    }

    try {
      setError("");
      setLoad(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/")
    } catch {
      setError("Failed to create account! Try again");
    }
    setLoad(false);
  };

  return (
    <Card style={{ padding: "5px" }}>
      <h2>Sign Up to Social-C!</h2>
      {error && <Alert color="danger">{error}</Alert>}
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
            innerRef={emailRef}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
            innerRef={passwordRef}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Confirm password</Label>
          <Input
            type="password"
            name="confirmPassword"
            id="examplePassword"
            placeholder="password placeholder"
            innerRef={passwordConfirmRef}
          />
        </FormGroup>
        <Button disabled={load} type="submit" onClick={handleSubmit}>
          Sign Up
        </Button>
        <p>
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </Form>
    </Card>
  );
};

export default SignupForm;
