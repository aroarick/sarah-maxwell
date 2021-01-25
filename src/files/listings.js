import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { listingData } from "../data/listingsData";

export default function Listings() {
  return (
    <Container>
      {listingData.map((data, key) => {
        return (
          <Row key={key}>
            <Col>
              <Image fluid src={data.image}></Image>
            </Col>
            <Col>
              <h5>{data.header}</h5>
              <h5>{data.description}</h5>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}
