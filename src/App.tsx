import { useState } from 'react'
import './App.css'
import words from './word-list.json'
import { getRandomItem } from './utils'
import HangmanDrawing from './HangmanDrawing'
import HangmanWord from './HangmanWord'
import Keyboard from './Keyboard'

function App() {
  const [wordToGuess] = useState(() => {
    return getRandomItem(words)
  })
  const [guessedLetters] = useState<string[]>([])
  const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter))

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
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <Keyboard />
    </div>
  )
}

export default App
