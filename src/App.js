import React from 'react';
import { NavBar } from "./COMPONENTS/NavBar";
import { TextArea } from './COMPONENTS/TextArea';
import { About } from './COMPONENTS/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



function App() {
  const a = localStorage.getItem("modes");
  const [dark, setDark] = useState(a);
  if (dark === null) {

    setDark("bg-indigo-600");
  }

  const [hover, setHover] = useState("hover:bg-blue-800");


  const toggleMode = () => {

    if (dark === "bg-indigo-600") {
      setDark("bg-slate-800");
      setHover("hover:bg-slate-500");
      localStorage.setItem("modes", "bg-slate-800");
      // localStorage.setItem("modes", "bg-slate-800");

    } else {
      setDark("bg-indigo-600");
      setHover("hover:bg-blue-800");

      localStorage.setItem("modes", "bg-indigo-600");

    }
  };

  return (<>
    <Router>
      <style>
        { ` body{
      ${dark === "bg-slate-800" ? "background:black" : "background:white"};
      }`}</style>
      <NavBar mode={ dark } hover={ hover } toggleMode={ toggleMode } />
      <Routes>
        <Route exact path="/" element={ <TextArea mode={ dark } hover={ hover } /> } />
        <Route exact path="/about" element={ <About mode={ dark } hover={ hover } /> } />

      </Routes>



    </Router>
  </>
  );
}

export default App;
