import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Quiz } from './components/Quiz'
import { Question } from './components/Question'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Quiz questions={[{question: "What color is the sky?", answer:"blue", options:["blue", "red", "yellow", "purple"]}]}></Quiz>
    </>
  )
}

export default App
