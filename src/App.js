import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Effect from "./components/pages/Effect";
import Game from "./components/pages/Game";
import Music from "./components/pages/Music";
import Php from "./components/pages/Php";
import Teamphp from "./components/pages/Teamphp";
import Rjs from "./components/pages/Rjs";
import Vuejs from "./components/pages/Vuejs";
import Webstan from "./components/pages/Webstan";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/about" exact component={About} />
      <Route path="/effect" exact component={Effect} />
      <Route path="/game" exact component={Game} />
      <Route path="/music" exact component={Music} />
      <Route path="/php" exact component={Php} />
      <Route path="/teamphp" exact component={Teamphp} />
      <Route path="/rjs" exact component={Rjs} />
      <Route path="/vuejs" exact component={Vuejs} />
      <Route path="/webstan" exact component={Webstan} />
    </Router>
  );
}

export default App;
