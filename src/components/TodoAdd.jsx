import React, { useState } from "react";
import { Redirect } from "react-router";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useAuth } from "../contexts/AuthContext";

const TodoModal = (props) => {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const {currentUser} = useAuth()

  return currentUser ? (
    <div>
      <Button color="primary" onClick={toggle}>
        Add to-do
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <Form>
          <ModalHeader toggle={toggle}>Add To-Do</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="exampleEmail">Title</Label>
              <Input
                type="todoTitle"
                name="todoTitle"
                id="todoTitle"
                placeholder="To-Do title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todoPlace">Place</Label>
              <Input
                type="todoPlace"
                name="todoPlace"
                id="todoPlace"
                placeholder="todoPlace"
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input type="description" name="description" id="description" />
            </FormGroup>
            <FormGroup>
              <Label for="imageURL">Image URL:</Label>
              <Input
                type="imageURL"
                name="imageURL"
                id="imageURL"
                placeholder="image URL"
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  ) : (<Redirect to="/"></Redirect>);
};

export default TodoModal;
