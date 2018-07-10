import React, { Component } from 'react'
import {StyledUl} from './App.styles'

class CustomUL extends Component{
    render(){
        return  <StyledUl>
                    {this.props.links}
                </StyledUl>
    }
}

export default CustomUL