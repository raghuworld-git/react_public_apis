import React from "react";
import { Header, Card, Image, Label } from "semantic-ui-react";

const UpComing = () => {
  return (
    <Card fluid>
      <Card.Content textAlign="center">
        <Header as="h5">
          <Label color="red" size="small">
            Upcoming launch
          </Label>
        </Header>
      </Card.Content>
      <Image
        src="https://images.unsplash.com/photo-1517052269751-4ae3ad86cc59?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1789&q=80"
        wrapped
        ui={false}
      />

      <Card.Content textAlign="center">
        <Card.Header>Soyuz 2.1b | Lotos-S1</Card.Header>
        <Card.Meta>
          Launch date: <span className="date">2/3/2021, 2:15:28 AM</span>
        </Card.Meta>
        <Card.Description>
          Lotos-S1 spacecraft is a part of the Liana constellation, designed for
          orbital electronic intelligence.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href='/' className="right floated">For more launches</a>
      </Card.Content>
    </Card>
  );
};

export default UpComing;
