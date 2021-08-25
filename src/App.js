import {BrowserRouter, Switch, Route, Link, NavLink} from "react-router-dom";
import Home from "./components/pages/Home"
import NotFound from "./components/pages/NotFound";
import Navigation from "./components/organisms/Navigation";
import Login from "./components/organisms/Login";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navigation username={"Kasia"}/>
        <Switch>
          <Route exact path="/" component={Home} />
          {/*<Route exact path="/contact" component={Contact} />*/}
            <Route exact path="/login" component={Login}/>
            <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
