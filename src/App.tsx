import { useState } from 'react'
import './App.css'
import words from './word-list.json'
import { getRandomItem } from './utils'

function App() {
  const [wordToGuess] = useState(() => {
    return getRandomItem(words)
  })
  const [guessedLetters] = useState<string[]>([])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          fontSize: '2rem',
          textAlign: 'center',
        }}
      >
        Lose Win
      </div>
    </div>
  )
}

export default App
