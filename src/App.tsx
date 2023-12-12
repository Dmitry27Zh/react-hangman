import { useState } from 'react'
import './App.css'
import words from './word-list.json'
import { getRandomItem } from './utils'

function App() {
  const [wordToGuess] = useState(() => {
    return getRandomItem(words)
  })

  return <div></div>
}

export default App
