import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import { CanvasContainer } from "./CanvasContainer";
import { ThreeTest1 } from "./ThreeTest1";
import { ThreeTest2 } from "./ThreeTest2";
import { ThreeTest3 } from "./ThreeTest3";
import { TestShader } from "./TestShader";
import "./App.css";

const NLink = styled(NavLink).attrs((props) => ({
  exact: true,
}))`
  color: #abc;
  font-size: 1.0rem;
  &.active {
    color: #fff;
  }
`;

const NavBar = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 0rem;
  padding-top: 3rem;
  z-index: 100;
`;

const Text = styled.div`
  color: #fff;
  font-size: 2em;
  text-align: center;
  padding-top: 2em;
`;

const App = () => {
  return (
    <Router>
      <NavBar>
        <div>
          <NLink to="/">Home</NLink>
        </div>
        <div>
          <NLink to="/ThreeTest1">ThreeTest1</NLink>
        </div>
        <div>
          <NLink to="/ThreeTest2">ThreeTest2</NLink>
        </div>
        <div>
          <NLink to="/ThreeTest3">ThreeTest3</NLink>
        </div>
        <div>
          <NLink to="/TestShader">TestShader</NLink>
        </div>
      </NavBar>
      <Switch>
        <Route exact path="/">
          <Text>Some threejs tests</Text>
        </Route>
        <Route path="/ThreeTest1">
          <ThreeTest1 />
        </Route>
        <Route path="/ThreeTest2">
          <ThreeTest2 />
        </Route>
        <Route path="/ThreeTest3">
          <ThreeTest3 />
        </Route>
        <Route path="/TestShader">
          <TestShader />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
