import React from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import CardList from "../MainPage";
import AuthPageContainer from "../AuthPageContainer";



function App() {
  return (
    <> 
    <Route path='/' exact component={AuthPageContainer} />
    <Route path='/main' exact component={CardList} />
    {/* <CardList numbers={[]} /> */}
    
    </>
  );
}

export default App;
