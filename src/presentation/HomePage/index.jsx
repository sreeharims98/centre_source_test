import React from "react";
import { Route, Switch } from "react-router";
import { routes } from "../common/routes";
import MyFooter from "./components/Footer";
import Navbar from "./components/Navbar";
import ListDishes from "./List Dishes";
import SelectYourPlan from "./Select Your Plans";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          exact
          path={routes.SELECT_YOUR_PLAN}
          component={SelectYourPlan}
        />
        <Route exact path={routes.LIST_DISHES} component={ListDishes} />
      </Switch>
      <MyFooter />
    </>
  );
};

export default HomePage;
