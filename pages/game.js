import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Page from './../layouts/page'
import Board from './../components/board.js'

export default class Game extends React.Component {
  static async getInitialProps ({query}) {
    return {query}
  }

  constructor (props) {
    super()
    this.state = {
      error: null,
      mapName: props.query.map,
      map: null,
      entites: [],
      frame: 0
    }
  }

  async loadMap () {
    try {
      const res = await fetch(`/static/maps/${this.state.mapName}.json`)
      const map = await res.json()
      await this.setState({map})
    } catch (error) {
      this.setState({error})
    }
  }

  // playGod (alive, callback) {
  //   let i = 0
  //   let j = 0
  //   let life = []
  //
  //   while (i < this.state.height) {
  //     j = 0
  //     life[i] = []
  //     while (j < this.state.width) {
  //       if (alive === true || alive === false) {
  //         life[i][j] = alive
  //       } else {
  //         life[i][j] = Math.random() >= 0.5
  //       }
  //       j++
  //     }
  //     i++
  //   }
  //
  //   if (typeof callback === 'function') {
  //     this.setState({life}, callback)
  //   } else {
  //     this.setState({life})
  //   }
  // }

  async componentDidMount () {
    document.addEventListener('keydown', this.handleKeyPress.bind(this))
    await this.loadMap()
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyPress.bind(this))
  }

  // spark () {
  //   clearTimeout(timer)
  //
  //   let i = 0
  //   let j = 0
  //   let newLife = []
  //
  //   while (i < this.state.height) {
  //     j = 0
  //     newLife.push([])
  //     while (j < this.state.width) {
  //       newLife[i][j] = this.updateLife(i, j)
  //       j++
  //     }
  //     i++
  //   }
  //
  //   this.setState({life: newLife, generations: this.state.generations + 1}, () => {
  //     // console.log(this.state.newLife)
  //     if (!this.state.running) { return }
  //     timer = setTimeout(() => { this.spark() }, this.state.sleep)
  //   })
  // }
  //
  // updateLife (i, j) {
  //   let value = this.state.life[i][j]
  //
  //   const neighbours = [
  //     this.getValue(i - 1, j - 1),
  //     this.getValue(i - 1, j),
  //     this.getValue(i - 1, j + 1),
  //     this.getValue(i, j - 1),
  //     this.getValue(i, j + 1),
  //     this.getValue(i + 1, j - 1),
  //     this.getValue(i + 1, j),
  //     this.getValue(i + 1, j + 1)
  //   ]
  //
  //   const aliveNeighboursCount = neighbours.filter((n) => n === true).length
  //
  //   // Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
  //   if (value === true && aliveNeighboursCount < 2) { return false }
  //
  //   // Any live cell with two or three live neighbours lives on to the next generation.
  //   if (value === true && (aliveNeighboursCount === 2 || aliveNeighboursCount === 3)) { return true }
  //
  //   // Any live cell with more than three live neighbours dies, as if by overpopulation.
  //   if (value === true && aliveNeighboursCount > 3) { return false }
  //
  //   // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
  //   if (value === false && aliveNeighboursCount === 3) { return true }
  //
  //   return value
  // }
  //
  // getValue (i, j) {
  //   if (i === -1) { i = this.state.width - 1 }
  //   if (j === -1) { j = this.state.height - 1 }
  //   if (i === this.state.width) { i = 0 }
  //   if (j === this.state.height) { j = 0 }
  //   return this.state.life[i][j]
  // }
  //
  // handleClick (i, j) {
  //   let life = this.state.life
  //   life[i][j] = !life[i][j]
  //   this.setState({life})
  // }
  //
  // playPause () {
  //   this.setState({running: !this.state.running}, () => {
  //     if (this.state.running) { this.spark() }
  //   })
  // }

  handleKeyPress (event) {
    console.log('got key', event.key)
  }

  render () {
    return (
      <Page>
        <Grid>

          <Row>
            <Col md={12}>
              <hr />
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Board map={this.state.map} />
            </Col>
          </Row>
        </Grid>
      </Page>
    )
  }
}
