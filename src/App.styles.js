import styled from 'styled-components'


export const StyledLi = styled.li`
    display: inline;
    position: relative;
`

export const StyledA = styled.a`
    color:#333;
    display:inline-block;
    padding:10px;
    text-decoration:none;
`

export const StyledUl = styled.ul`
    font-family: 'Trebuchet MS';
    font-size: 17px;
    list-style: none;
    margin-top: 20px;
    text-align: center;
    
    @keyframes ul {
        0% { 
       width:0;
     }
     100% { 
       width:calc(100% - 23px);
     }
   }
`

export const StyledSpan = styled.span `
    background:#0088CC;
    bottom:-10px;
    display:block;
    height:4px;
    left:10px;
    position:absolute;
    width:calc(100% - 23px);
`

