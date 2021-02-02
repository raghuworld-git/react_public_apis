import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import PeopleInSpace from "./iss/PeopleInSpace";
import ISSPosition from "./iss/ISSPosition";
import UpComing from "./launches/UpComing";

const Space = () => {
  return (
    <Grid columns={3}>
      <Grid.Row stretched>
        <Grid.Column>
          <UpComing />
        </Grid.Column>
        <Grid.Column className="">
          <PeopleInSpace />
          <ISSPosition />
        </Grid.Column>
        <Grid.Column>
          <Segment>1</Segment>
          <Segment>2</Segment>
          <Segment>3</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Space;
