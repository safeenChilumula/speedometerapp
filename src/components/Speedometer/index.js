import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  decrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="speedometer-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="image"
            alt="speedometer"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          />
          <h1 className="speed">Speed is 0mph</h1>
          <p className="para">Min Limit is {count}mph, Max Limit is 200mph</p>
          <div className="card">
            <button
              type="button"
              className="accel-button"
              onClick={this.onIncrement}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="button-brake"
              onClick={this.decrement}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
