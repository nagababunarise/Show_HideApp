import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  onShowFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  onShowLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-card">
          <div>
            <button
              type="button"
              className="button"
              onClick={this.onShowFirstName}
            >
              Show/Hide FirstName
            </button>
            {isFirstName && <p className="para">Narise</p>}
          </div>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.onShowLastName}
            >
              Show/Hide LastName
            </button>
            {isLastName && <p className="para">Nanda</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
