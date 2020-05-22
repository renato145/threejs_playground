import React from "react";
import {
  HashRouter,
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
import { FractalMandelBrot } from "./FractalMandelBrot";
import { ExplodingSphere } from "./ExplodingSphere";
import { ShaderEditor } from "./ShaderEditor";
import "./App.css";

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
      border-right: rgba(0, 0, 0, 0.0) 1.0rem solid;
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
  const isHome = location.pathname === '/';

  return (
    <>
      <NavBar isHome={isHome}>
        <div>
          <NLink to={`/`}>Home</NLink>
        </div>
        <div>
          <NLink to={`/BoxGeometry`}>BoxGeometry</NLink>
        </div>
        <div>
          <NLink to={`/SurfaceD3`}>SurfaceD3</NLink>
        </div>
        <div>
          <NLink to={`/SurfaceShader`}>SurfaceShader</NLink>
        </div>
        <div>
          <NLink to={`/TestShader`}>TestShader</NLink>
        </div>
        <div>
          <NLink to={`/PlaneGeometry`}>PlaneGeometry</NLink>
        </div>
        <div>
          <NLink to={`/PlaneGeometryShader`}>
            PlaneGeometryShader
          </NLink>
        </div>
        <div>
          <NLink to={`/ShaderTemplate`}>ShaderTemplate</NLink>
        </div>
        <div>
          <NLink to={`/ShaderShapes`}>ShaderShapes</NLink>
        </div>
        <div>
          <NLink to={`/ShaderTexture`}>ShaderTexture</NLink>
        </div>
        <div>
          <NLink to={`/FractalKoch`}>FractalKoch</NLink>
        </div>
        <div>
          <NLink to={`/FractalMandelBrot`}>FractalMandelBrot</NLink>
        </div>
        <div>
          <NLink to={`/ExplodingSphere`}>ExplodingSphere</NLink>
        </div>
        <div>
          <NLink to={`/ShaderEditor`}>ShaderEditor</NLink>
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
        <Route exact path={`/`}>
          <HomeContent />
        </Route>
        <Route path={`/BoxGeometry`}>
          <BoxGeometry />
        </Route>
        <Route path={`/SurfaceD3`}>
          <SurfaceD3 />
        </Route>
        <Route path={`/SurfaceShader`}>
          <SurfaceShader />
        </Route>
        <Route path={`/TestShader`}>
          <TestShader />
        </Route>
        <Route path={`/PlaneGeometry`}>
          <PlaneGeometry />
        </Route>
        <Route path={`/PlaneGeometryShader`}>
          <PlaneGeometryShader />
        </Route>
        <Route path={`/ShaderTemplate`}>
          <ShaderTemplate />
        </Route>
        <Route path={`/ShaderShapes`}>
          <ShaderShapes />
        </Route>
        <Route path={`/ShaderTexture`}>
          <ShaderTexture />
        </Route>
        <Route path={`/FractalKoch`}>
          <FractalKoch />
        </Route>
        <Route path={`/FractalMandelBrot`}>
          <FractalMandelBrot />
        </Route>
        <Route path={`/ExplodingSphere`}>
          <ExplodingSphere />
        </Route>
        <Route path={`/ShaderEditor`}>
          <ShaderEditor />
        </Route>
      </Switch>
    </>
  );
};

const App = () => (
  <HashRouter basename='/'>
    <AppContent />
  </HashRouter>
);

export default App;
