import React from "react";
import Books from "./pages/Books";
import {BrowserRouter as Router, Route, Switch} from 
react-router-dom";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Router from './utils/API'


function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Route exact path = '/' component={Books} />
      <Route exact path="/books " component={Books} />
      <Route exact path =  "/books/:id "  component={Detail} />
      <Route component ={NoMatch} />
      <Books />
    </div>
    </Router>
  );
}

export default App;
