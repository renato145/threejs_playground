import React from "react";
import {
  HashRouter,
  Route,
  NavLink,
  Switch,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";
import { BoxGeometry } from "./shaders/BoxGeometry";
import { SurfaceD3 } from "./shaders/SurfaceD3";
import { SurfaceShader } from "./shaders/SurfaceShader";
import { TestShader } from "./shaders/TestShader";
import { PlaneGeometry } from "./shaders/PlaneGeometry";
import { PlaneGeometryShader } from "./shaders/PlaneGeometryShader";
import { ShaderTemplate } from "./shaders/ShaderTemplate";
import { ShaderShapes } from "./shaders/ShaderShapes";
import { ShaderTexture } from "./shaders/ShaderTexture";
import { FractalKoch } from "./shaders/FractalKoch";
import { FractalMandelBrot } from "./shaders/FractalMandelBrot";
import { ExplodingSphere } from "./shaders/ExplodingSphere";
import { ShaderEditor } from "./shaders/ShaderEditor";
import "./index.css";

const NLink = ({ children, ...props }) => (
  <NavLink
    className="pb-1"
    activeClassName="text-gray-400 hover:text-gray-400 font-bold"
    exact
    {...props}
  >
    {children}
  </NavLink>
);

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

const HomeContent = () => (
  <div className="pt-10 text-center">
    <h1>Threejs Playground</h1>
    <p className="mt-10">
      Made by: Renato Hermoza, check the{" "}
      <a
        href="https://github.com/renato145/threejs_playground/"
        target="_black"
      >
        source code
      </a>
      .
    </p>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <NavBar isHome={isHome}>
        <NLink to={`/`}>Home</NLink>
        <NLink to={`/BoxGeometry`}>BoxGeometry</NLink>
        <NLink to={`/SurfaceD3`}>SurfaceD3</NLink>
        <NLink to={`/SurfaceShader`}>SurfaceShader</NLink>
        <NLink to={`/TestShader`}>TestShader</NLink>
        <NLink to={`/PlaneGeometry`}>PlaneGeometry</NLink>
        <NLink to={`/PlaneGeometryShader`}>PlaneGeometryShader</NLink>
        <NLink to={`/ShaderTemplate`}>ShaderTemplate</NLink>
        <NLink to={`/ShaderShapes`}>ShaderShapes</NLink>
        <NLink to={`/ShaderTexture`}>ShaderTexture</NLink>
        <NLink to={`/FractalKoch`}>FractalKoch</NLink>
        <NLink to={`/FractalMandelBrot`}>FractalMandelBrot</NLink>
        <NLink to={`/ExplodingSphere`}>ExplodingSphere</NLink>
        <NLink to={`/ShaderEditor`}>ShaderEditor</NLink>
        <a
          href="https://github.com/renato145/threejs_playground/"
          target="_black"
        >
          Source Code
        </a>
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
  <HashRouter basename="/">
    <AppContent />
  </HashRouter>
);

export default App;
