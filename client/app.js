import React from 'react'
import Condition from './conditions.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chillingHours: null,
      conditions: []
    }
  }

  render() {
    return (
    <React.Fragment>
      {this.state.chillingHours === null ? null : (
        <div id="chillingHrs">Chilling units: {this.state.chillingHours}</div>)
      }
      <form id="conditions">
        <ul>
          {this.state.numOfConditions.map((condition, i) => (
          <Condition lt={condition.lt} gt={condition.gt} chill={condition.chill} key={i}/>)
          )}
        </ul>
      </form>
      
    </React.Fragment>
    )
  }
}