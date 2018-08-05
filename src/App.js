import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// COMPONENTS
import Navbar from "./components/layout/Navbar";
import Games from "./components/games/Games";
// import Create from "./components/games/Create";
import CreateForm from "./components/games/CreateForm";
// import Edit from "./components/games/Edit";
import EditForm from "./components/games/EditForm";
import Home from "./components/home/Home";
import NotFound from "./components/NotFound";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container my-3">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/games" component={Games} />
                {/* <Route exact path="/games/create" component={Create} /> */}
                <Route exact path="/games/create" component={CreateForm} />
                {/* <Route exact path="/games/edit/:id" component={Edit} /> */}
                <Route exact path="/games/edit/:id" component={EditForm} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
