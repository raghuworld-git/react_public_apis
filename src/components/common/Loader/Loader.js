import React from "react";
import { Segment, Dimmer, Loader as SLoader } from "semantic-ui-react";

const Loader = () => {
  return (
    <Segment>
      <Dimmer active>
        <SLoader>Loading</SLoader>
      </Dimmer>
    </Segment>
  );
};

export default Loader;
