import React, { useState } from 'react'
import './App.css'
import InputNumberFunction from './components/InputNumberFunction'
import InputNumberClass from './components/InputNumberClass'

function App() {
  const [cValue, setCValue] = useState('aaa')
  const [fValue, setFValue] = useState('aaa')
  return (
    <>
      <h2>class组件</h2>
      <div>
        受控：
        <InputNumberClass
          value={cValue}
          onChange={e => setCValue(e.target.value)}
        />
        非受控：
        <InputNumberClass
          defaultValue={cValue}
          onChange={e => console.log(e.target.value)}
        />
      </div>
      <h2>function组件</h2>
      <div>
        受控：
        <InputNumberFunction
          value={fValue}
          onChange={e => setFValue(e.target.value)}
        />
        非受控
        <InputNumberFunction
          defaultValue={fValue}
          onChange={e => console.log(e.target.value)}
        />
      </div>
    </>
  )
}

export default App
