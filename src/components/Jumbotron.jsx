import React from "react";
import { Jumbotron } from "reactstrap";

const Header = (props) => {
  const { name, description, groupID, instructions } = props;

  return (
    <Jumbotron fluid>
      <h1 className="display-3">{name}</h1>
      <p>Your group: {groupID}</p>
      <h6 className="lead">{description}</h6>
      <p>{instructions}</p>
      
    </Jumbotron>
  );
};

export default Header;
