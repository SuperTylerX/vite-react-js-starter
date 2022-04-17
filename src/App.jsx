import { NavLink, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import News from "./pages/News";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <NavLink to="/news">News</NavLink>
      <Switch>
        <Route path="/news" component={News} />
      </Switch>
    </div>
  );
}

export default App;
