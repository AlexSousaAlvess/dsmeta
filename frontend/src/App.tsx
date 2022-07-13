import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NotificationButton from "./components/NotificationButton";
import SalesCard from "./components/SalesCard";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/sobre" element={<About/>}/>
      </Routes>
    </>
  )
}

export default App;