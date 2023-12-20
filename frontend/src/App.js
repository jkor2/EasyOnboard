import logo from './logo.svg';
import './App.css';
import React from "react"
import { Routes, Route } from 'react-router-dom';
import Home from './components/home'; // Home Page 



function App() {

  React.useEffect(() => {
    fetch("/api/users", {
      method: "GET"})
      .then((res) => res.json())
      .then((data) => console.log(data))


  }, [])

  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
