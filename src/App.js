import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";
import { BoxGeometry } from "./BoxGeometry";
import { SurfaceD3 } from "./SurfaceD3";
import { SurfaceShader } from "./SurfaceShader";
import { TestShader } from "./TestShader";
import { PlaneGeometry } from "./PlaneGeometry";
import { PlaneGeometryShader } from "./PlaneGeometryShader";
import { ShaderTemplate } from "./ShaderTemplate";
import { ShaderShapes } from "./ShaderShapes";
import { ShaderTexture } from "./ShaderTexture";
import { FractalKoch } from "./FractalKoch";
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

export const Link = styled.a`
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
  margin-top: 3rem;
  padding: 1em 1em;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
  transition: all 0.2s ease-out;

  & > div {
    padding-bottom: 0.5rem;
  }

  ${({ isHome }) =>
    !isHome &&
    `
    border-right: rgba(20, 20, 20, 0.6) 1.0rem solid;
    transform: translateX(calc(80px - 100%));
    padding-right: 80px;

    &:hover {
      transform: translateX(0px);
      padding-right: 1em;
    }`}
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
  padding-top: 0.5em;
`;

const HomeContent = () => (
  <>
    <Text>Threejs playground</Text>
    <SubText style={{paddingTop: "3em"}}>
      Made by: Renato Hermoza, check the{" "}
      <Link
        href="https://github.com/renato145/threejs_playground/"
        target="_black"
      >
        source code
      </Link>
      .
    </SubText>
  </>
);

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname.replace(/\//g, "") === BASE_URL;

  return (
    <>
      <NavBar isHome={isHome}>
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
          <NLink to={`/${BASE_URL}/PlaneGeometryShader`}>
            PlaneGeometryShader
          </NLink>
        </div>
        <div>
          <NLink to={`/${BASE_URL}/ShaderTemplate`}>ShaderTemplate</NLink>
        </div>
        <div>
          <NLink to={`/${BASE_URL}/ShaderShapes`}>ShaderShapes</NLink>
        </div>
        <div>
          <NLink to={`/${BASE_URL}/ShaderTexture`}>ShaderTexture</NLink>
        </div>
        <div>
          <NLink to={`/${BASE_URL}/FractalKoch`}>FractalKoch</NLink>
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
          <HomeContent />
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
        <Route path={`/${BASE_URL}/ShaderTemplate`}>
          <ShaderTemplate />
        </Route>
        <Route path={`/${BASE_URL}/ShaderShapes`}>
          <ShaderShapes />
        </Route>
        <Route path={`/${BASE_URL}/ShaderTexture`}>
          <ShaderTexture />
        </Route>
        <Route path={`/${BASE_URL}/FractalKoch`}>
          <FractalKoch />
        </Route>
      </Switch>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
