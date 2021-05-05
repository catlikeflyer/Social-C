import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const TodoCard = (props) => {
  const { title, subtitle, description, id, imageURL, groupID } = props;

  return (
    <div>
      <Card key={id}>
        <CardImg top width="100%" src={imageURL} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {subtitle}
          </CardSubtitle>
          <CardText>{description}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default TodoCard;
