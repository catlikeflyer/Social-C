import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const MemoryCard = (props) => {
  const { title, place, description, imageURL, groupID, id } = props;

  return (
    <div key={id}>
      <Card>
        <CardBody>
          <CardTitle tag="h4">{title}</CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-muted">
            {place}
          </CardSubtitle>
        </CardBody>
        <img width="100%" src={imageURL} alt="" />
        <CardBody>
          <CardText>{description}</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default MemoryCard;
