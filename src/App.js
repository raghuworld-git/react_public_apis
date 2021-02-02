import React from "react";
import { Divider } from "semantic-ui-react";
import Space from "./components/space/Space";
import IISDetails from './components/space/iss/IISDetails';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Space} />
          <Route path='/iss/view' component={IISDetails}/>
        </Switch>
      </BrowserRouter>
      {/* <Divider horizontal>Space</Divider> */}
    </div>
  );
};

export default App;
