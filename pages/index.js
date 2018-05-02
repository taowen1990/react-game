import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Page from './../layouts/page'

const Maps = ['test']

export default class Index extends React.Component {
  render () {
    return (
      <Page>
        <Grid>

          <Row>
            <Col md={12}>
              <h1>Game!</h1>
              <p>Pick a Map:</p>
              {
                Maps.map((name) => {
                  return <div key={name}>
                    <Link href={`/game?map=${name}`}><a>{name}</a></Link>
                  </div>
                })
              }
            </Col>
          </Row>
        </Grid>
      </Page>
    )
  }
}
