import { NavLink, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Count from "./pages/Count";
import News from "./pages/News";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <NavLink to="/news" className="button">
        News
      </NavLink>
      <NavLink to="/count" className="button">
        Count
      </NavLink>
      <Switch>
        <Route path="/news" component={News} />
        <Route path="/count" component={Count} />
      </Switch>
    </div>
  );
}

export default App;
