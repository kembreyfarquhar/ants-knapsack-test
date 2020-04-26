import React from "react";
import { Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import Login from "./components/Login";
import Game from "./components/game/Game";

function App() {
  return (
    <div className="main">
      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/game" render={() => <Game />} />
    </div>
  );
}

export default App;
