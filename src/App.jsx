import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increament = () => {
      setCount(count++)
  }
  const reduce = () => {
    setCount(count--)
}
  return (
    <>
      <p>count</p>
      <div>
        <button type='button' onClick={increament}>+</button>
        <button type='button' onClick={reduce}>-</button>
      </div>
       
    </>
  )
}

export default App
