import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Navigation'

function App() {

  return (
    <>
      <div className='body'>
        <Navigation/>
        <main className='main-content'>
          <div className='profile'></div>
          <div className='news'></div>
        </main>
      </div>  
    </>
  )
}

export default App;
