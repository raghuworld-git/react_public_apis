import React from "react";
import { Card, Header } from "semantic-ui-react";
import Loader from "../Loader/Loader";

const SimpleCard = ({ isLoading }) => {
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Card link>
      <Card.Content textAlign="center">
        <Header size="huge">
          <Header.Subheader></Header.Subheader>
        </Header>
      </Card.Content>
    </Card>
  );
};

export default SimpleCard;
