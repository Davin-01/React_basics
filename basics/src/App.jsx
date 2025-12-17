import React from 'react';
import { useState } from 'react';
import './App.css'

function App() {
 const [counter, setCounter] = useState(15)

 const addValue = () => {
  setCounter(counter + 1)
 }
 const removeValue = () => {
  setCounter(counter - 1)
 }
  return (
    <div className='w-full h-screen bg-gray-400 '>
    <h1 className='bg-black text-white font-semibold'>React Course with Dave</h1>
    <h1 
    className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg                                                                                                                                                                                                                                                                                                                                                                                                                                     mt-5 mb-5'
    >Counter:{counter}</h1>
    <button
    onClick={addValue}
    className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-white mt-5 mb-5'
    >
      Add Value</button> {""}
    <button
    onClick={removeValue}
    className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-white'
    >Remove Value</button>
    <h1>Footer: {counter}</h1>
    </div>
  )
}

export default App
