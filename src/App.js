import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import { BoxGeometry } from "./BoxGeometry";
import { SurfaceD3 } from "./SurfaceD3";
import { SurfaceShader } from "./SurfaceShader";
import { TestShader } from "./TestShader";
import { PlaneGeometry } from "./PlaneGeometry";
import { PlaneGeometryShader } from "./PlaneGeometryShader";
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
          <NLink to={`/${BASE_URL}/BoxGeometry`}>BoxGeometry</NLink>
        </div>
        <div>
          <NLink to={`/${BASE_URL}/SurfaceD3`}>SurfaceD3</NLink>
        </div>
        <div>
          <NLink to={`/${BASE_URL}/SurfaceShader`}>SurfaceShader</NLink>
        </div>
        <div>
          <NLink to={`/${BASE_URL}/TestShader`}>TestShader</NLink>
        </div>
        <div>
          <NLink to={`/${BASE_URL}/PlaneGeometry`}>PlaneGeometry</NLink>
        </div>
        <div>
          <NLink to={`/${BASE_URL}/PlaneGeometryShader`}>PlaneGeometryShader</NLink>
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
        <Route path={`/${BASE_URL}/BoxGeometry`}>
          <BoxGeometry />
        </Route>
        <Route path={`/${BASE_URL}/SurfaceD3`}>
          <SurfaceD3 />
        </Route>
        <Route path={`/${BASE_URL}/SurfaceShader`}>
          <SurfaceShader />
        </Route>
        <Route path={`/${BASE_URL}/TestShader`}>
          <TestShader />
        </Route>
        <Route path={`/${BASE_URL}/PlaneGeometry`}>
          <PlaneGeometry />
        </Route>
        <Route path={`/${BASE_URL}/PlaneGeometryShader`}>
          <PlaneGeometryShader />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
