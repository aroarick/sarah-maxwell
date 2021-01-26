import React from "react";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import { listingData } from "../data/listingsData";

export default function Listings() {
  return (
    <Container>
      {listingData.map((data, key) => {
        return (
          <CardDeck style={{ width: "18rem" }}>
            <Card variant="top" key={key}>
              <Card.Img fluid src={data.image}></Card.Img>
              <Card.Body>
                <Card.Title>{data.header}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        );
      })}
    </Container>
  );
}
