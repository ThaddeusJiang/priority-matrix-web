import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import BugsPriority from "./pages/BugsPriority/BugsPriority";
import FeaturesPriority from "./pages/FeaturesPriority/FeaturesPriority";

import "./main.css";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BugsPriority} />
        <Route path="/bugs" component={BugsPriority} />
        <Route path="/features" component={FeaturesPriority} />
      </Switch>
    </BrowserRouter>
  );
}
