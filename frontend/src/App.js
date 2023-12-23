import logo from './logo.svg';
import './App.css';
import React from "react"
import { Routes, Route } from 'react-router-dom';
import Home from './components/home'; // Home Page 
import Upload from './components/upload'; // Data Upload
import EmployeePipeline from './components/employeePipeline';
import QuickUpdate from './components/fulloverview';
import ProfilePage from './components/personalPage';

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
        <Route path="/upload" element={<Upload/>}></Route>
        <Route path="/pipeline" element={<EmployeePipeline/>}></Route>
        <Route path="/updates" element={<QuickUpdate/>}></Route>
        <Route path="/users/edit/employee/:id" element={<ProfilePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
