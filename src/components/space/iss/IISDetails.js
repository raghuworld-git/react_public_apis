import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentLocationOfISS } from "../../../actions/spaceActions";
import { Grid, Header, Segment, Dimmer, Loader } from "semantic-ui-react";
import TableData from "./TableData";

class IISDetails extends Component {
  componentDidMount() {
    this.props.getCurrentLocationOfISS();
  }

  renderHTML() {
    if (this.props.issInfo.length <= 0) {
      return (
        <Segment>
          <Dimmer active inverted>
            <Loader/>
          </Dimmer>
        </Segment>
      );
    }
    return (
      <>
        <TableData issInfo={this.props.issInfo[0]} />
      </>
    );
  }
  render() {
    return (
      <Grid columns={3}>
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={10}>
          <Header textAlign="center" as="h3">
            ISS Current Information
          </Header>
          {this.renderHTML()}
        </Grid.Column>
        <Grid.Column width={3}></Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.issLocation);
  return {
    issInfo: state.issLocation,
  };
};
export default connect(mapStateToProps, { getCurrentLocationOfISS })(
  IISDetails
);
