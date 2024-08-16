import React from "react";
import Header from "./Header";
import { DataProvider } from "./Contexdata";
import Navbar from "./Navbar";
import Section from "./Section";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (

    <DataProvider>
      <Header />
      <Navbar />
      <Section />
    </DataProvider>
  );
}

export default App;