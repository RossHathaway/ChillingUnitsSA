import React from 'react'
import ReactDOM from 'react-dom'
import Condition from './condition.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chillingHours: null,
      conditions: [
        {lt: 32, gt: '', chill: 0}
      ]
    }
    this.removeEntry = this.removeEntry.bind(this)
    this.addCondition = this.addCondition.bind(this)
    // this.inputChange = this.inputChange.bind(this)
  }

  // inputChange(e, i) {
  //   this.setState({conditions: this.state.conditions.splice(i, 1, e.target.value)})
  // }

  removeEntry(i) {
    this.setState({conditions: this.state.conditions.splice(i, 1)})
  }

  addCondition() {
    let cond = this.state.conditions
    this.setState({conditions: cond.concat([
      {lt: '', gt: cond[cond.length - 1].lt, chill: ''}
    ])})
  }

  render() {
    return (
    <React.Fragment>
      {this.state.chillingHours === null ? null : (
        <div id="chillingHrs">Chilling units: {this.state.chillingHours}</div>)
      }
      <form action="/chillingUnits" method="POST">
        <fieldset>
          <legend>Enter your chilling unit specifications</legend>
          <ul>
            {this.state.conditions.map((condition, i) => (
            <Condition lt={condition.lt} gt={condition.gt} chill={condition.chill} key={i} removeEntry={() => {this.removeEntry(i)}} conditions={this.state.conditions} index={i}/>)
            )}
            {/*onchange={function(e) {this.inputChange(e, i)}}*/}
          </ul>
        </fieldset>
        <fieldset>
          <legend>Enter date range</legend>
            Start: <input type="date"></input>
            <br></br>
            End: <input type="date"></input>
        </fieldset>
        <input type="submit" value="Calculate Chill Units"></input>
      </form>
      <br></br>
      <button>
        Download Database (SQL dump, can be restored with pg_restore)
      </button>
      <button onClick={this.addCondition}>Add condition</button>
      <br></br>
      chillingUnits
      <div id="attribution">
        <br></br>
        <a href="https://darksky.net">Powered by Dark Sky</a>
      </div>
    </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))