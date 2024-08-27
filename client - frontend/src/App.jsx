import { useState } from 'react'
import Join from './components/join/Join'
import Chat from './components/Chat/Chat'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Join/>
      <Chat/>
    </>
  )
}

export default App
