import React from "react";
import { Card, Header } from "semantic-ui-react";

const CountCards = ({ countValue = 0, countDescription = "" }) => {  
  return (
    <Card link>
      <Card.Content textAlign="center">
        <Header size="huge" style={{ fontSize: "5em" }}>
          {countValue}
          <Header.Subheader>{countDescription}</Header.Subheader>
        </Header>
      </Card.Content>
      {/* <div class="ui bottom attached button">
        <i class="add icon"></i>
        Add Friend
      </div> */}
    </Card>
  );
};

export default CountCards;
