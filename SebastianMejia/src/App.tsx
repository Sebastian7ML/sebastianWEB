import { useState } from 'react'
import reactLogo from './assets/sm.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <a href="https://github.com/Sebastian7ML" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Sebastián Mejía</h1>
      <h2>Software Engineer & Avionics Technician</h2>
      <h3>// Tech Enthusiast</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
