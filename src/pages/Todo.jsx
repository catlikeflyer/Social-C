import React from "react";
import { Container, Row, Col } from "reactstrap";
import TodoCard from "../components/Card";
import Header from "../components/Jumbotron";
import TodoModal from "../components/TodoAdd";
import { todoData } from "./dummyData";
import { useAuth } from "../contexts/AuthContext";

// Firebase function to retrieve todo collection **Temporal dummy data
const todoCollection = () => {
  return todoData;
};

const TodoPage = () => {
  const todosi = todoCollection();
  const { groupID, todos } = useAuth();

  return (
    <Container fluid={true} style={{ padding: "0px", position: "relative" }}>
      <Header
        name="To-Do List"
        description="Our one-and-only things to do"
        page="todo"
      />
      <h1>{groupID}{JSON.stringify(todos)}</h1>
      <Container>
        <Row>
          {todosi.map((todo) => {
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
        <TodoModal groupID={groupID} />
      </Container>
    </Container>
  );
};

export default TodoPage;
