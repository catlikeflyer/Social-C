import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import TodoCard from "../components/Card";
import Header from "../components/Jumbotron";
import TodoModal from "../components/TodoAdd";
import { todoData } from "./dummyData";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";

// Firebase function to retrieve todo collection **Temporal dummy data
const todoCollection = () => {
  return todoData;
};

const TodoPage = () => {
  const { groupID } = useAuth();
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    db.collection("todos").onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        if (doc.data().groupID === groupID) {
          data.push({...doc.data(), id: doc.id});
          console.log(doc.data())
        }
      });
      setTodos(data);
    });
  };

  useEffect(() => {
    getTodos();
    console.log(todos)
  }, [todos]);

  return (
    <Container fluid={true} style={{ padding: "0px", position: "relative" }}>
      <Header
        name="To-Do List"
        description="Our one-and-only things to do"
        page="todo"
        groupID={groupID}
        instructions="Click the button below to add a thing to do and copy the image url you'd like as thumbnail in the corresponding box."
      />
      <Container>
        <TodoModal groupID={groupID} />

        <Row>
          {todos.map((todo) => {
            return (
              <Col
                md="4"
                sm="12"
                style={{ paddingTop: "1vh", paddingBottom: "1vh" }}
              >
                <TodoCard {...todo} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default TodoPage;
