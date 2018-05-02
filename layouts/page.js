import React from 'react'
import Head from 'next/head'

export default class extends React.Component {
  render () {
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width' />
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' />
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css' />

          <title>Game!</title>
        </Head>

        { this.props.children }
      </div>
    )
  }
}
