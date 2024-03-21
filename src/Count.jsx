import { useState } from 'react'

function Count() {
    const [count, setCount] = useState(0)
    const increament = () => {
        setCount(count + 1)
    }
    const reduce = () => {
      setCount(count - 1)
  }
  return (
    <div className='wrapper'>
      <h1>Count: {count}</h1>
      <div className='btn-wrapper'>
        <button type='button' onClick={increament} className='increse-btn'>+</button>
        <button type='button' onClick={reduce} className='decrease-btn'>-</button>
      </div>
    </div>
  )
}

export default Count
