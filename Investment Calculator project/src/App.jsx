import { useState } from "react";
import Calculator from "./components/Calculator";
import Header from "./components/Header";
import Results from "./components/Results";

function App() {
  return (
    <>
    <Header />
    <main>
      <Calculator />
      <Results />
    </main>
    </>
  )
}

export default App
