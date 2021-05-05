import React, { useRef, useState } from "react";
import { Button, Form, FormGroup, Label, Input, Card, Alert } from "reactstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const SignupForm = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const privateIDRef = useRef();
  const usernameRef = useRef();
  const [error, setError] = useState();
  const [load, setLoad] = useState();
  const { signup, currentUser } = useAuth();
  const history = useHistory();
  const privateKeys = ["1234doyi", "4321doyi"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userObj = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      groupID: privateIDRef.current.value,
    };

    console.log(currentUser);
    props.addUser(userObj);

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords don't match!");
    }

    if (!privateKeys.includes(privateIDRef.current.value)) {
      return setError("Invalid private ID!");
    }

    try {
      setError("");
      setLoad(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
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
          <Label for="username">Username</Label>
          <Input
            type="name"
            name="username"
            id="username"
            placeholder="Username"
            innerRef={usernameRef}
          />
        </FormGroup>
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
            placeholder="Password"
            innerRef={passwordRef}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Confirm password</Label>
          <Input
            type="password"
            name="confirmPassword"
            id="examplePassword"
            placeholder="Confirm password"
            innerRef={passwordConfirmRef}
          />
        </FormGroup>
        <FormGroup>
          <Label for="privateID">Private ID</Label>
          <Input
            type="id"
            name="privateID"
            id="privateID"
            placeholder="Insert your private ID"
            innerRef={privateIDRef}
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
