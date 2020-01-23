import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/main.scss'

import Capitals from './components/Capitals'

class App extends React.Component {
  render() {
    return (
      <Capitals />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)