import { useState } from 'react'
import './App.css'
import words from './word-list.json'
import { getRandomItem } from './utils'

function App() {
  const [wordToGuess] = useState(() => {
    return getRandomItem(words)
  })
  const [guessedLetters] = useState<string[]>([])

  return <div></div>
}

export default App
