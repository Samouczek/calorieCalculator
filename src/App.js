import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Container} from "@material-ui/core";
import NotFound from "./components/pages/NotFound";
import Navigation from "./components/organisms/navigation/Navigation";
import Login from "./components/pages/login/Login";
import Profile from "./components/pages/Profile";
import Products from "./components/pages/Products";

function App() {
  return (
    <>
      <BrowserRouter>
          <Container maxWidth="lg">
          <Navigation username={"Kasia"}/>
        <Switch>
            <Route exact path="/" component={Profile} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/products" component={Products}/>
            <Route component={NotFound} />
        </Switch>
          </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
