import React from "react";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import { listingData } from "../data/listingsData";

export default function Listings() {
  return (
    <Container>
      <CardDeck className="listings-deck">
        {listingData.map((data, key) => {
          return (
            <Card
              className="listings-card"
              variant="top"
              key={key}
              style={{ minWidth: "100%", maxWidth: "100%" }}
            >
              <Card.Img fluid src={data.image}></Card.Img>
              <Card.Body>
                <Card.Title>{data.header}</Card.Title>
                <Card.Text>{data.bathBed}</Card.Text>
                <Card.Title>{data.price}</Card.Title>
              </Card.Body>
            </Card>
          );
        })}
      </CardDeck>
    </Container>
  );
}
