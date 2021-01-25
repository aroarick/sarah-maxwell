import React from "react";
import {
  Container,
  Image,
  Grid,
  Header,
  Button,
  Icon,
  GridRow,
  Label,
  Segment,
  Card,
} from "semantic-ui-react";
import { listingData } from "../data/listingsData";

export default function Listings() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Card.Group>
            {listingData.map((item, index) => (
              <Card key={index}>
                <Image src={item.image}></Image>
                <Card.Content>
                  <Card.Header>{item.header}</Card.Header>
                  <Card.Meta>{item.description}</Card.Meta>
                </Card.Content>
                <Card.Content>
                  <Button floated="right" className="cookie-button">
                    ORDER
                  </Button>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
