import React, { Component } from "react";
import {
  Card,
  Grid,
  Statistic,
  Image,
  Divider,
  Header,
  Search,
  Button,
  Segment,
  Icon,
} from "semantic-ui-react";

class Landing extends Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "50px" }}>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <Grid columns={2} stackable textAlign="center">
                  <Divider vertical />
                  <Grid.Row verticalAlign="middle">
                    <Grid.Column>
                      <Statistic>
                        <Statistic.Value>42</Statistic.Value>
                      </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                      <Header as="h3">Humans currently in space</Header>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Landing;
