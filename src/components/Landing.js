import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import CountCards from "./common/Cards/CountCards";
import SimpleCard from "./common/Cards/SimpleCard";

import {
  getCurrentPeopleInSpace,
  getCurrentLocationOfISS,
} from "../actions/spaceActions";

class Landing extends Component {
  componentDidMount() {
    this.props.getCurrentPeopleInSpace();
    this.props.getCurrentLocationOfISS();
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Grid columns={4} stackable>
          <Grid.Row>
            <Grid.Column>
              <CountCards
                countValue={this.props.peopleInSpaceCount}
                countDescription="Total Humans currently in space"
              />
            </Grid.Column>
            <Grid.Column>
              <SimpleCard
                isLoading={true}
                mainContent={""}
                description="International Space Station (IIS) current location"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    peopleInSpace: state.peopleInSpace,
    peopleInSpaceCount: state.peopleInSpace.length,
    issLocation: state.issLocation,
  };
};
export default connect(mapStatesToProps, {
  getCurrentPeopleInSpace,
  getCurrentLocationOfISS,
})(Landing);
