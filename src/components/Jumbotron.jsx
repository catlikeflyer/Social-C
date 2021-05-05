import React from "react";
import { Jumbotron } from "reactstrap";

const Header = (props) => {
  const { name, description } = props;

  return (
    <Jumbotron fluid>
      <h1 className="display-3">{name}</h1>
      <p className="lead">{description}</p>
    </Jumbotron>
  );
};

export default Header;
