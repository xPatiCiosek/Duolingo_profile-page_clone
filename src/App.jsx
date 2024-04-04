import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/Navigation';
import Profile from './components/Profile/Profile';


function App() {

  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </>
    </Router>  
  )
}

export default App;
