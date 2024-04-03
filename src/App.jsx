import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Navigation'
import Profile from './Profile'
import News from './News'

function App() {

  return (
    <>
      <Navigation />
      <main className='main-content'>
        <Profile/>
        <News/>
      </main>
    </>
  )
}

export default App;
