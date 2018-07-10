import React, { Component } from 'react'
import './App.css'
import CustomLink from './CustomLink'
import CustomUL from './CustomUL'
const getLinks = () => [ { label: 'Home', url: '/' }, { label: 'Woof!', url: '/dog' }, { label: 'Hello!', url: '/hello' } ]


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
    return this.state.links.map(({url, label}) => (
      <CustomLink key={url} href={url} label={label} />
    ))
  }

  render () {
    return (
      // <StyledUl>
      //   {this.renderLinks()}
      // </StyledUl>
      <CustomUL links={this.renderLinks()}/>
    )
  }
}

export default App
