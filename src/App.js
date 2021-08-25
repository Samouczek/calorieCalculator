import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/*<Route exact path="/contact" component={Contact} />*/}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
