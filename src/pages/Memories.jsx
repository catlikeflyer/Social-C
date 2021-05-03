import React from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "../components/Jumbotron";
import { todoData } from "./dummyData";

// Firebase function to retrieve todo collection **Temporal dummy data
const todoCollection = () => {
  return todoData;
};

const TodoPage = () => {
  const todos = todoCollection();

  return (
    <Container
      fluid={true}
      style={{ padding: "0px", position: "relative", marginTop: "30px" }}
    >
      <Header name="To-Do List" description="Our one-and-only things to do" />
      <Container>

      </Container>
    </Container>
  );
};

export default TodoPage;
