import React from 'react'

export default class App extends React.Component {

  render () {
    return (
      <div id="App">
        {this.props.children}
      </div>
    )
  }
}
