import React from 'react'

const Condition = ({lt, gt, chill, removeEntry, index, conditions}) => (
  <li>
    Less than <input type="number" name={`lt${index}`} defaultValue={conditions[index].lt}></input>
    Greater than <input type="number" name={`gt${index}`} defaultValue={conditions[index].gt}></input>
    Chilling units <input type="number" name={`chill${index}`} defaultValue={conditions[index].chill}></input>
    <button onClick={removeEntry}>Remove</button>
  </li>
)

export default Condition