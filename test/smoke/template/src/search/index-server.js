// document.write('search page')

// import React from 'react'
// // import ReactDOM from 'react-dom'
// // import { a } from './tree-shaking'
// import largeNumber from 'large-plus-number'
// import './css/search.less'
// import logo from './images/age.png'
// import '../../common/index'

const React = require('react')
const largeNumber = require('large-plus-number')
const logo = require('./images/age.png')
require('./css/search.less')
require('../../common/index')

class Search extends React.Component {
  constructor() {
    super()

    this.state = {
      Text: null,
    }
  }

  loadComponent() {
    import('./text.js').then((Text) => {
      this.setState({
        Text: Text.default,
      })
    })
  }

  render() {
    const { Text } = this.state
    const largeResult = largeNumber('999', '11')
    return (
      <div className="search-text">
        {largeResult}
        {
          Text ? <Text /> : null
        }
        Search Text
        <p>这是一个段落！</p>
        <button type="button" onClick={this.loadComponent.bind(this)}>按钮</button>
        <img src={logo} alt="logo" />
      </div>
    )
  }
}

module.exports = <Search />
