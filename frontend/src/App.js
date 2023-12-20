import logo from './logo.svg';
import './App.css';
import React from "react"


function App() {

  React.useEffect(() => {
    fetch("/api/users", {
      method: "GET"})
      .then((res) => res.json())
      .then((data) => console.log(data))


  }, [])

  return (
    <div className="App">
      <h1>Test</h1>
    </div>
  );
}

export default App;
