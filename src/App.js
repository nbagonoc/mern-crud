import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// COMPONENTS
import Navbar from "./components/layout/Navbar";
import Item from "./components/items/Item";
import Items from "./components/items/Items";
import CreateForm from "./components/items/CreateForm";
import EditForm from "./components/items/EditForm";
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
                <Route exact path="/items" component={Items} />
                <Route exact path="/items/show/:id" component={Item} />
                <Route exact path="/items/create" component={CreateForm} />
                <Route exact path="/items/edit/:id" component={EditForm} />
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
