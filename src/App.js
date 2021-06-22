import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from './assets/styles/global';
import Routes from "./routes";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
