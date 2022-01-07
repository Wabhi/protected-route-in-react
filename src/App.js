import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomeComponent from "./Pages/HomeComponent";
import AccountComponent from "./Pages/AccountComponent";
import CardsComponent from "./Pages/CardsComponent";
import ProtectedRoute from "./ProtectedRoute";
import useAuth from "./useAuth";
// import "./App.css";
const App = () => {
  const [isAuth, login, logout] = useAuth(false);

  return (
    <div className="ui container">
      <h2>HELLO PROTECTED ROUTE ! HOW ARE YOU ? </h2>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Account">Account (PROTECTED)</Link>
          </li>
          <li>
            <Link to="/Cards">Cards</Link>
          </li>
        </ul>
        {isAuth ? (
          <>
            <div className="ui message brown">You are logged in..</div>
            <button className="ui button blue" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <div className="ui message violet">You are logged out..</div>
            <button className="ui button blue" onClick={login}>
              Login
            </button>
          </>
        )}

        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/Cards" component={CardsComponent} />
          <ProtectedRoute
            path="/Account"
            component={AccountComponent}
            auth={isAuth}
          />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
