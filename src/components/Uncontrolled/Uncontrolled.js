import React, { useRef } from 'react'
import './Uncontrolled.css'

export function Uncontrolled() {
  const nameInput = useRef('')
  const notesTextarea = useRef('')
  const frameworkSelect = useRef(null)

  function handleSubmit(event) {
    console.log('Uncontrolled', {
      name: nameInput.current.value,
      notes: notesTextarea.current.value,
      framework: frameworkSelect.current.value,
    })
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="uncontrolled__form-container">
      <h1>Uncontrolled</h1>
      <label>
        Name:
        <input type="text" ref={nameInput} />
      </label>
      <label>
        Notes:
        <textarea ref={notesTextarea} />
      </label>
      <label>
        Your favorite framework:
        <select ref={frameworkSelect} defaultValue="">
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
