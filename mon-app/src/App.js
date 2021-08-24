import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import Chat from "./Components/messenger/chat"

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/message">
            <Chat />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
