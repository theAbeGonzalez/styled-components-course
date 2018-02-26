import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  color: ${({ selected }) => (selected ? 'red !important' : 'black')};
`

const Nav = styled.ul`
  font-family: 'SoberanaSans';
  font-size: 17px;
  list-style: none;
  margin-top: 20px;
  text-align: center;
`

const NavItem = styled.li`
  display: inline;
  position: relative;

  a {
    color: #333;
    display: inline-block;
    padding: 10px;
    text-decoration: none;
  }
  a:hover {
    color: #0088cc;
  }

  a:hover ~ span {
    animation: ul 0.3s ease-out;
    background: #333;
  }
`

const Border = styled.span`
  background: #0088cc;
  bottom: -10px;
  display: block;
  height: 4px;
  left: 10px;
  position: absolute;
  width: calc(100% - 23px);
`

export { Border, Nav, NavItem, StyledLink }
