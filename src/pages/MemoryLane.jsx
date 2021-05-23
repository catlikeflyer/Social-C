import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import MemoryCard from "../components/MemoryCards";
import Header from "../components/Jumbotron";
import MemoryModal from "../components/MemoryAdd";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";

const MemoryPage = () => {
  const { groupID } = useAuth();
  const [memories, setMemories] = useState([]);

  const getMemories = async () => {
    db.collection("memories").onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        if (doc.data().groupID === groupID) {
          data.push({ ...doc.data(), id: doc.id });
          console.log(doc.data());
        }
      });
      setMemories(data);
    });
  };

  useEffect(() => {
    getMemories();
    console.log(memories);
  }, [memories]);

  return (
    <Container fluid={true} style={{ padding: "0px", position: "relative" }}>
      <Header
        name="Memory Lane"
        description="Unrepeatable experiences"
        page="memory"
        groupID={groupID}
        instructions="Click the button below to add a thing to do and upload an image to use as thumbnail."
      />
      <Container>
        <MemoryModal groupID={groupID} />

        <Row>
          {memories.map((memory) => {
            return (
              <Col
                md="4"
                sm="12"
                style={{ paddingTop: "1vh", paddingBottom: "1vh" }}
              >
                <MemoryCard {...memory} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default MemoryPage;
