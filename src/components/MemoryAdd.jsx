import React, { useRef, useState } from "react";
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
import { db, storage } from "../firebase";

const MemoryModal = (props) => {
  const { className, groupID } = props;
  const [modal, setModal] = useState(false);
  const [fileURL, setFileURL] = useState(null);
  const toggle = () => setModal(!modal);
  const titleRef = useRef();
  const placeRef = useRef();
  const descriptionRef = useRef();

  const addMemory = async (memObj) => {
    await db.collection("memories").doc().set(memObj);
  };

  const onFileChange = async (e) => {
    const file = e.target.files[0]
    const storageRef = storage.ref()
    const fileRef = storageRef.child(file.name)

    await fileRef.put(file).then(() => {
        console.log("Uploaded file", file.name)
    })
    setFileURL(await fileRef.getDownloadURL())
  }

  const handleSubmit = (e) => {
    const memObj = {
      title: titleRef.current.value,
      place: placeRef.current.value,
      description: descriptionRef.current.value,
      imageURL: fileURL,
      groupID: groupID,
    };

    e.preventDefault();
    addMemory(memObj);
    console.log(groupID);
    console.log("added memory");
    toggle();
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Add Memory
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <Form>
          <ModalHeader toggle={toggle}>Add Memory</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="memTitle">Title</Label>
              <Input
                type="title"
                name="todoTitle"
                id="memTitle"
                placeholder="What memory?"
                innerRef={titleRef}
              />
            </FormGroup>
            <FormGroup>
              <Label for="todoPlace">Place</Label>
              <Input
                type="todoPlace"
                name="todoPlace"
                id="todoPlace"
                placeholder="Where?"
                innerRef={placeRef}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="description"
                name="description"
                id="description"
                innerRef={descriptionRef}
              />
            </FormGroup>
            <FormGroup>
              <Label for="imageURL">Image URL:</Label>
              <Input
                type="file"
                onChange={onFileChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSubmit}>
              Submit
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default MemoryModal;
