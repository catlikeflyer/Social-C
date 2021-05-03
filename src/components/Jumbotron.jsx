import React from "react";
import { Jumbotron, Container } from "reactstrap";
import TodoModal from "./TodoAdd";

const Header = (props) => {
  const { name, description, page } = props;
  const buttonSwitch = (page) => {
    switch (page) {
      case "todo":
        return <TodoModal />
      default:
        break;
    }
  }

  return (
    <Jumbotron fluid>
      <h1 className="display-3">{name}</h1>
      <p className="lead">{description}</p>
      {buttonSwitch(page)}
    </Jumbotron>
  );
};

export default Header;
