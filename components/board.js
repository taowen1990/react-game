import React from 'react'

import Empty from './tiles/empty.js'
import Wall from './tiles/wall.js'

export default class Board extends React.Component {
  render () {
    let x = -1
    let y = -1

    if (!this.props.map) { return null }

    return <table>
      <tbody>
        {
          this.props.map.map((row) => {
            x = -1
            y++
            return <tr key={`map-row-${y}`}>
              {
                row.map((ComponentName) => {
                  x++
                  const key = `map[${x},${y}]`
                  if (!ComponentName) { return <td key={key}><Empty /></td> }
                  if (ComponentName === 'Wall') { return <td key={key}><Wall /></td> }
                })
              }
            </tr>
          })
        }
      </tbody>
    </table>
  }
}
