import { Switch, Route } from "react-router-dom";
import User from "../pages/User";
import Done from "../pages/Done";
import Privacy from "../pages/Privacy";
import { urls } from "./urls";

export default () => (
  <Switch>
    <Route path={urls.user} exact component={User} />
    <Route path={urls.privacy} exact component={Privacy} />
    <Route path={urls.done} exact component={Done} />
  </Switch>
);
