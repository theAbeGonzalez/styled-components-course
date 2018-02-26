import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Border, Nav, NavItem } from './style'

const getLinks = () => [
  { label: 'Home', url: '/' },
  { label: 'Woof!', url: '/dog' },
  { label: 'Hello!', url: '/hello' }
]

const Zelda = ({ url, label, classes }) => (
  <NavItem key={url}>
    <Link to={url}>{label}</Link>
    <Border />
  </NavItem>
)

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: '/',
      links: []
    }
    this.renderLinks = this.renderLinks.bind(this)
  }

  componentDidMount () {
    this.setState({
      links: getLinks()
    })
  }

  renderLinks () {
    return this.state.links.map(link => <Zelda {...link} />)
  }

  render () {
    return <Nav>{this.renderLinks()}</Nav>
  }
}

export default App
