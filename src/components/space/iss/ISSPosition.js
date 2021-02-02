import React, { Component } from "react";
import { Header, Segment, Statistic,Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { getCurrentLocationOfISS } from "../../../actions/spaceActions";

class ISSPosition extends Component {
  timertoFetchISS = null;
  componentDidMount() {
    this.timertoFetchISS = setInterval(() => {
      this.props.getCurrentLocationOfISS();
    }, 5000);
  }

  componentWillUnmount(){
      clearInterval(this.timertoFetchISS);
  }

  renderHTML() {
    let isLoading = false;
    if (this.props.issCoordinates.length <= 0) {
      isLoading = true;
    }
    return (
      <Segment className={isLoading ? "loading" : ""} textAlign="center" inverted>
        <Statistic.Group widths="two" size="tiny" inverted>
          <Statistic>
            <Statistic.Value>
              {isLoading
                ? 0.0
                : this.props.issCoordinates[0].iss_position.latitude}
            </Statistic.Value>
            <Statistic.Label>latitude</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              {isLoading
                ? 0.0
                : this.props.issCoordinates[0].iss_position.longitude}
            </Statistic.Value>
            <Statistic.Label>longitude</Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <Header as="h4">ISS Current Location</Header>
        <a className='ui button basic inverted mini'>
          View in Maps
        </a>
      </Segment>
    );
  }
  render() {
    return this.renderHTML();
  }
}

const mapStateToProps = (state) => {
  return {
    issCoordinates: state.issLocation,
  };
};

export default connect(mapStateToProps, { getCurrentLocationOfISS })(
  ISSPosition
);
