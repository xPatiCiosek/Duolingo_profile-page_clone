import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './Navigation';
import Profile from './Profile';
import News from './News';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isScreenSmall = useMediaQuery({ maxWidth: 800 });

  return (
    <>
      <NavBar />
      <main className='main-content'>
        <Profile/>
        {isScreenSmall ? null : (
        <News/>
        )}
      </main>
    </>
  )
}

export default App;
