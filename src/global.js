import { injectGlobal } from 'styled-components'
import SoberanaSans from './fonts/soberanasans-regular-webfont.ttf'

injectGlobal`
  @font-face {
    font-family: 'SoberanaSans';
    src: url('${SoberanaSans}');
  }

  body {
    margin: 0;
  }
`
