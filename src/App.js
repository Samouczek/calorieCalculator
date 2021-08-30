import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Container} from "@material-ui/core";
import NotFound from "./components/pages/NotFound";
import Navigation from "./components/organisms/navigation/Navigation";
import Login from "./components/pages/login/Login";
import Profile from "./components/pages/Profile";
import Products from "./components/pages/Products";
import {LOG_IN, PRODUCTS} from "./constants/Route";
import {useState} from "react";

function App() {
    const [userName, setUserName] = useState(false);
    console.log("App: " + userName)
    const userLogIn = (user) => {
      setUserName(user);
    }

  return (
    <>
      <BrowserRouter>
          <Container maxWidth="lg">
          <Navigation username={userName}/>
        <Switch>
            <Route exact path="/" component={Profile} />
            <Route exact path={LOG_IN}>
                <Login userLogIn={userLogIn}/>
            </Route>
            <Route exact path={PRODUCTS} component={Products}/>
            <Route component={NotFound} />
        </Switch>
          </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
