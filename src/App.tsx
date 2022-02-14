import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Card title="tes" icon="asdf" value="asd" />
      <Card title="tes" icon="asdf" value="asd" />
      <Card title="tes" icon="asdf" value="asd" />
    </div>
  );
}

export default App;
