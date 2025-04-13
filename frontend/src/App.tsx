import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Quiz } from './components/Quiz'
import { Login } from './routes/Login'
import { Register } from './routes/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Quiz questions={[
  {
    "question": "What is the capital of France?",
    "answer": "Paris",
    "options": ["Paris", "London", "Rome", "Berlin"]
  },
  {
    "question": "Which element has the chemical symbol 'O'?",
    "answer": "Oxygen",
    "options": ["Oxygen", "Gold", "Osmium", "Ozone"]
  },
  {
    "question": "Who wrote 'Romeo and Juliet'?",
    "answer": "William Shakespeare",
    "options": ["William Shakespeare", "Jane Austen", "Mark Twain", "Charles Dickens"]
  },
  {
    "question": "What is 7 x 6?",
    "answer": "42",
    "options": ["36", "42", "48", "52"]
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "answer": "Mars",
    "options": ["Mars", "Venus", "Jupiter", "Mercury"]
  }
]}></Quiz> */}
    {/* <Login></Login> */}
    <Register></Register>
    </>
  )
}

export default App
