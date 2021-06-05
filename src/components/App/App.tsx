import React from "react";
import { Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import CardList from "../MainPage";
import AuthPageContainer from "../AuthPageContainer";

function App() {
  return (
    <>
      <Switch>
        <Route path="/auth" exact component={AuthPageContainer} />
        <Route path="/main" exact component={CardList} />
        {/* <CardList numbers={[]} /> */}
      </Switch>
    </>
  );
}

export default App;
