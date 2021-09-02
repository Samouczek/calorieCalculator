import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Container, CssBaseline} from "@material-ui/core";
import NotFound from "./components/pages/NotFound";
import Navigation from "./components/organisms/navigation/Navigation";
import Login from "./components/pages/login/Login";
import Profile from "./components/pages/Profile";
import Products from "./components/pages/Products";
import {DATABASE, LOG_IN, PRODUCTS} from "./constants/Route";
import {useState} from "react";
import ProductDatabase from "./components/pages/ProductDatabase";

function App() {
    const [userName, setUserName] = useState(false);

    const userLogIn = (user) => {
      setUserName(user);
    }

  return (
    <>
      <BrowserRouter>
              <Container maxWidth="lg">
                  <CssBaseline />
                  <Navigation username={userName}/>
                    <Switch>
                        <Route exact path={LOG_IN}>
                            <Login userLogIn={userLogIn}/>
                        </Route>
                        <Route exact path="/" component={Profile} />
                        <Route exact path={PRODUCTS}>
                            <Products user={userName}/>
                        </Route>
                        <Route exact path={DATABASE} component={ProductDatabase}/>
                        <Route component={NotFound} />
                    </Switch>
              </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
