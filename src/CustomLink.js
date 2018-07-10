import React, { Component } from 'react'
import {StyledLi, StyledSpan, StyledA} from './App.styles'

class CustomLink extends Component{
    render(){
        return  <StyledLi>
                    <StyledA href={this.props.url}>{this.props.label}</StyledA>
                    <StyledSpan/>
                </StyledLi>
    }
}

export default CustomLink