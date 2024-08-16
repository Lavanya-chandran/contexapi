import React from "react";
import Header from "./Header";
import { DataProvider } from "./contexdata";
import Navbar from "./Navbar";
import Section from "./Section";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //  Calling Created Components in //
  return (
  
      <DataProvider>
        <Header />
      <Navbar />
      <Section />
    </DataProvider>
  );
}

export default App;