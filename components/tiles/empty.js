import React from 'react'
import Constants from '../constants.js'

export default class Wall extends React.Component {
  style () {
    let style = {
      border: 'solid #333333 1px',
      backgroundColor: 'white',
      width: Constants.tiles.width,
      height: Constants.tiles.height,
      float: 'left'
    }

    return style
  }

  render () {
    return <div style={this.style()} />
  }
}
