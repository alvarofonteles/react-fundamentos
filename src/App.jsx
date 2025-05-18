import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PrimeiroComponente from "./components/PrimeiroComponente"
import Comp from "./components/Comp"


function App() {
  // comentário
  /* comentário 2 */
  /** comentário 3 */
  return (
    <>
      <h1>Vite + React</h1>
      <div>        
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        {/** comentário 4 */} 
        <h1>Fundamentos do React</h1>
        <PrimeiroComponente />
        <Comp />
      </div>
    </>
  )
}

export default App
