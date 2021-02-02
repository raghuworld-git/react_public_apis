import React, { Component } from "react";
import { Segment, Statistic, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { getCurrentPeopleInSpace } from "../../../actions/spaceActions";

class PeopleInSpace extends Component {
  componentDidMount() {
    this.props.getCurrentPeopleInSpace();
  }

  renderHTML() {
    let isLoading = false;
    if (this.props.peopleInSpace.length <= 0) {
      isLoading = true;
    }
    return (
      <Segment
        textAlign="center"
        placeholder
        className={isLoading === true ? "loading" : ""}
      >
        <Statistic size="large">
          <Statistic.Value>
            {isLoading ? 0 : this.props.peopleInSpace.length}
          </Statistic.Value>
          <Statistic.Label>
            Humans are currently in{" "}
            <a
              href="https://en.wikipedia.org/wiki/International_Space_Station"
              target="_blank"
              rel="noreferrer"
            >
              <abbr title="Internation Space Station">ISS</abbr>
            </a>
          </Statistic.Label>
        </Statistic>
        <Button secondary size="mini" basic>
          For more
        </Button>
      </Segment>
    );
  }
  render() {
    return this.renderHTML();
  }
}

const mapStateToProps = (state) => {
  return {
    peopleInSpace: state.peopleInSpace,
  };
};
export default connect(mapStateToProps, { getCurrentPeopleInSpace })(
  PeopleInSpace
);
