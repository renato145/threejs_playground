import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import { ThreeTest1 } from "./ThreeTest1";
import { ThreeTest2 } from "./ThreeTest2";
import { ThreeTest3 } from "./ThreeTest3";
import { TestShader } from "./TestShader";
import "./App.css";

const BASE_URL = "threejs_playground";

const NLink = styled(NavLink).attrs((props) => ({
  exact: true,
}))`
  color: #abc;
  font-size: 1rem;
  &.active {
    color: #fff;
  }
`;

const Link = styled.a`
  color: #abc;
  font-size: 1rem;
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

  & > div {
    padding-bottom: 0.5rem;
  }
`;

const Text = styled.div`
  color: #fff;
  font-size: 2em;
  text-align: center;
  padding-top: 2em;
`;

const SubText = styled.div`
  color: #fff;
  font-size: 1.2em;
  text-align: center;
  padding-top: 3em;
`;

const App = () => {
  return (
    <Router>
      <NavBar>
        <div>
          <NLink to={`/${BASE_URL}/`}>Home</NLink>
        </div>
        <div>
          <NLink to={`/${BASE_URL}/ThreeTest1`}>ThreeTest1</NLink>
        </div>
        <div>
          <NLink to={`/${BASE_URL}/ThreeTest2`}>ThreeTest2</NLink>
        </div>
        <div>
          <NLink to={`/${BASE_URL}/ThreeTest3`}>ThreeTest3</NLink>
        </div>
        <div>
          <NLink to={`/${BASE_URL}/TestShader`}>TestShader</NLink>
        </div>
        <div>
          <Link
            href="https://github.com/renato145/threejs_playground/"
            target="_black"
          >
            Source Code
          </Link>
        </div>
      </NavBar>
      <Switch>
        <Route exact path={`/${BASE_URL}/`}>
          <Text>Threejs playground</Text>
          <SubText>
            Made by: Renato Hermoza, check the{" "}
            <Link
              href="https://github.com/renato145/threejs_playground/"
              target="_black"
            >
              source code
            </Link>
            .
          </SubText>
        </Route>
        <Route path={`/${BASE_URL}/ThreeTest1`}>
          <ThreeTest1 />
        </Route>
        <Route path={`/${BASE_URL}/ThreeTest2`}>
          <ThreeTest2 />
        </Route>
        <Route path={`/${BASE_URL}/ThreeTest3`}>
          <ThreeTest3 />
        </Route>
        <Route path={`/${BASE_URL}/TestShader`}>
          <TestShader />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
