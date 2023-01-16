import React from 'react'

const PersonForm = ({
  addNumber,
  changeInputNameHandler,
  changeInputNumberHandler,
  newName,
  newNumber,
}) => {
  return (
    <form onSubmit={addNumber}>
      <div>
        name: <input onChange={changeInputNameHandler} value={newName} />
      </div>
      <div>
        number: <input onChange={changeInputNumberHandler} value={newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
