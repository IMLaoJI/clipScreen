import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Route, HashRouter} from 'react-router-dom'
import Canvas from './components/canvas'
import Image from './components/image'
import Main from './components'

class App extends Component {
  render () {
    return (
      <HashRouter>
        <div>
          <Route exact path='/' component={Main} />
          <Route exact path='/image' component={Image} />
          <Route exact path='/canvas' component={Canvas} />
        </div>
      </HashRouter>
    )
  }
}

ReactDOM.render(
    <App/>, document.querySelector('#app'));
