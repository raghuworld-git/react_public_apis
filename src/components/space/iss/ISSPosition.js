import React, { Component } from "react";
import { Header, Segment, Statistic } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentLocationOfISS } from "../../../actions/spaceActions";
import _ from "lodash";

class ISSPosition extends Component {
  timertoFetchISS = null;
  componentDidMount() {
    this.timertoFetchISS = setInterval(() => {
      this.props.getCurrentLocationOfISS();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timertoFetchISS);
  }

  renderHTML() {
    let isLoading = false;
    if (this.props.issCoordinates.length <= 0) {
      isLoading = true;
    }
    return (
      <Segment
        className={isLoading ? "loading" : ""}
        textAlign="center"
        inverted
      >
        <Statistic.Group widths="two" size="tiny" inverted>
          <Statistic>
            <Statistic.Value>
              {isLoading
                ? 0.0
                : _.round(this.props.issCoordinates[0].latitude, 4)}
            </Statistic.Value>
            <Statistic.Label>latitude</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              {isLoading
                ? 0.0
                : _.round(this.props.issCoordinates[0].longitude, 4)}
            </Statistic.Value>
            <Statistic.Label>longitude</Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <Header as="h4">ISS Current Location</Header>
        <Link to='/iss/view' as="a" className="ui button basic inverted mini">
          More
        </Link>
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
