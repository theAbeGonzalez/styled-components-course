import React, { Component } from 'react'

import { Border, Nav, NavItem, StyledLink } from './style'

const getLinks = () => [
  { label: 'Home', url: '/' },
  { label: 'Woof!', url: '/dog' },
  { label: 'Hello!', url: '/hello' }
]

const Zelda = ({ url, label, classes, selected }) => (
  <NavItem key={url}>
    <StyledLink selected={selected} to={url}>
      {label}
    </StyledLink>
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
      selected: '/',
      links: getLinks()
    })
  }

  renderLinks () {
    return this.state.links.map(link => {
      const isSelected = this.state.selected === link.url
      return <Zelda {...link} selected={isSelected} />
    })
  }

  render () {
    return <Nav>{this.renderLinks()}</Nav>
  }
}

export default App
