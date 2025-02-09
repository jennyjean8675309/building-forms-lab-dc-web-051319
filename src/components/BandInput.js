// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';

class BandInput extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <p>
            <label>Add a Band!</label>
            <input type='text' value={this.state.name} onChange={this.handleChange} />
          </p>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (newBand) => dispatch({ type: 'ADD_BAND', payload: newBand})
  }
}

export default connect(null, mapDispatchToProps)(BandInput)
