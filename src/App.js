import React, { Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Potato from "./containers/potato/Potato.js";
import Leek from "./containers/leek/Leek.js";
import PageNotFound from "./containers/PageNotFound/PageNotFound.js";
import configureStore from "./configureStore.js";
// import history from "./utils/history.js";  <–– to keep browsing history in the store via react-router-redux & history

const history = null;  // <–– default to no location history in state

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={configureStore(state, history)}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Potato} />
              <Route path="/one" component={Leek} />
              <Route component={PageNotFound} /> 
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>

    );
  }
}

export default App;
