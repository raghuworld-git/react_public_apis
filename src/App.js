import React from "react";
import { Divider } from "semantic-ui-react";
import Space from "./components/space/Space";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
     <Divider horizontal>Space</Divider>
      <Space />
    </div>
  );
};

export default App;
