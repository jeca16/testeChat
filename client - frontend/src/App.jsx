import { useState } from 'react'
import Join from './components/join/Join'
import Chat from './components/Chat/Chat'
import './App.css'

function App() {
  const [chatVisibility, setChatVisibility] = useState(false)

  return (
    <>
    {
      chatVisibility ? <Chat/> : <Join setChatVisibility ={setChatVisibility}/>
    }
    </>
  )
}

export default App
