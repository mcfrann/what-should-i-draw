import './App.css'
import { useState } from 'react'
import apiCalls from './apiCalls'

function App() {
  const [adjective, setAdjective] = useState('')
  const [noun, setNoun] = useState('')

  const fetchData = () => {
    apiCalls.fetchAdjective().then((res) => setAdjective(res))
    apiCalls.fetchNoun().then((res) => setNoun(res))
  }

  return (
    <div className='App'>
      <div className='wrapper'>
        <span className='title'>
          <h1>YOU</h1>
          <h1>SHOULD</h1>
          <h1>DRAW A:</h1>
        </span>
        <p>
          {adjective} {noun}
        </p>
      </div>
      <button onClick={fetchData}>generate</button>
    </div>
  )
}

export default App
