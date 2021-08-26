import {BrowserRouter, Switch, Route, Link, NavLink} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Navigation from "./components/organisms/Navigation";
import Login from "./components/pages/Login";
import {Container} from "@material-ui/core";
import Profile from "./components/pages/Profile";
function App() {
  return (
    <>
      <BrowserRouter>
          <Container maxWidth="lg">
          <Navigation username={"Kasia"}/>
        <Switch>
          <Route exact path="/" component={Profile} />
          {/*<Route exact path="/contact" component={Contact} />*/}
            <Route exact path="/login" component={Login}/>
            <Route component={NotFound} />
        </Switch>
          </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
