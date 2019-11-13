import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import FriendList from "./components/FriendList";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to= "/login">Login </Link>
        <Link to="/friends">Friend List</Link> 

        <Switch>
          <Route path= "/login" component = {LoginForm} />
          <PrivateRoute path="/friends" component={FriendList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
