import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import StarterPage from "./pages/StarterPage/StarterPage";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route path="/starter" component={StarterPage} />
      <Route path="*">
        <p>TODO: 404, not found</p>
      </Route>
    </BrowserRouter>
  );
}
