import React from 'react'

const Conditions = ({lt, gt, chill, inputChange, removeEntry}) => (
  <li>
    Less than <input type="text" value={lt} onChange={inputChange}></input>
    Greater than <input type="text" value={gt} onChange={inputChange}></input>
    Chilling units <input type="text" value={chill} onChange={inputChange}></input>
    <button onClick={removeEntry}>Remove</button>
  </li>
)

export default Conditions