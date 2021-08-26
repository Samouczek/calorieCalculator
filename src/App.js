import {BrowserRouter, Switch, Route, Link, NavLink} from "react-router-dom";
import Home from "./components/pages/Home"
import NotFound from "./components/pages/NotFound";
import Navigation from "./components/organisms/Navigation";
import Login from "./components/organisms/Login";
import {Container} from "@material-ui/core";

function App() {
  return (
    <>
      <BrowserRouter>
          <Container maxWidth="lg">
          <Navigation username={"Kasia"}/>
        <Switch>
          <Route exact path="/" component={Home} />
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
