import React from "react";
import { Container, Row, Col, Form } from "reactstrap";
import TodoCard from "../components/Card";
import Header from "../components/Jumbotron";
import TodoModal from "../components/TodoAdd";
import { todoData } from "./dummyData";

// Firebase function to retrieve todo collection **Temporal dummy data
const todoCollection = () => {
  return todoData;
};

const TodoPage = () => {
  const todos = todoCollection();

  return (
    <Container fluid={true} style={{ padding: "0px", position: "relative" }}>
      <Header
        name="To-Do List"
        description="Our one-and-only things to do"
        page="todo"
      />
      <Container>
        <Row>
          {todos.map((todo) => {
            return (
              <Col
                md="4"
                sm="12"
                key={todo.id}
                style={{ paddingTop: "1vh", paddingBottom: "1vh" }}
              >
                <TodoCard {...todo} />
              </Col>
            );
          })}
        </Row>
        <TodoModal />
      </Container>
    </Container>
  );
};

export default TodoPage;
