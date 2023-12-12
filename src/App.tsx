import { useCallback, useEffect, useState } from 'react'
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
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter))
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (!guessedLetters.includes(letter)) {
        setGuessedLetters((prevState) => [...prevState, letter])
      }
    },
    [guessedLetters]
  )
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const { key } = e

      if (/^[a-z]$/.test(key)) {
        e.preventDefault()
        addGuessedLetter(key)
      }
    }
    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [addGuessedLetter])

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
      <Keyboard
        activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>
  )
}

export default App
