import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'
import Band from '../components/Band'

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map( (band, index) => {
      return <Band key={index} band={band} />
    })
  }

  render() {
    return(
      <div>
        <ul>
          {this.renderBands()}
        </ul>
        <BandInput />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer)
