import React, { useState } from 'react'
import './Controlled.css'

export function Controlled() {
  const [name, setName] = useState('')
  const [notes, setNotes] = useState('')
  const [framework, setFramework] = useState('')

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleNotesChange(event) {
    setNotes(event.target.value)
  }

  function handleFrameworkChange(event) {
    setFramework(event.target.value)
  }

  function handleSubmit(event) {
    console.log('Controlled', {
      name,
      notes,
      framework,
    })
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="controlled__form-container">
      <h1>Controlled</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Notes:
        <textarea value={notes} onChange={handleNotesChange} />
      </label>
      <label>
        Your favorite framework:
        <select value={framework} onChange={handleFrameworkChange}>
          <option value="" disabled></option>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
          <option value="svelte">Svelte</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
