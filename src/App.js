import React from "react";
import "antd/dist/antd.css";
import LoginForm from "./presentation/login";
import HomePage from "./presentation/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./presentation/common/routes";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.INITIAL} component={LoginForm} />
          <Route path={routes.HOME} component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
