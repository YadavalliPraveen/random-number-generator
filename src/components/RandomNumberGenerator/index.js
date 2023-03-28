import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a Random number in the range of 0 to 100
          </p>
          <button
            onClick={this.generateNumber}
            type="button"
            className="button"
          >
            Generate
          </button>
          <p className="count">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
