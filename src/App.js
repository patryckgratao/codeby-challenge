import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from './assets/styles/global';
import Routes from "./routes";

function App() {
  return (
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
