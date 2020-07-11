import React from 'react'

import { Uncontrolled, Controlled } from './components'
import './App.css'

export default function App() {
  return (
    <div className="app__main-container">
      <Uncontrolled />
      <Controlled />
    </div>
  )
}
