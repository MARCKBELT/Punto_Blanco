import React from 'react';
//import ReactDOM from 'react-dom';
import RoutesHome from "./RoutesHome.js"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RoutesHome />
  </StrictMode>
);