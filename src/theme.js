import { createMuiTheme } from '@material-ui/core/styles'
import {red, indigo, grey, pink} from '@material-ui/core/colors'

/** 
 * COLOR SCHEME
 * BG: #EDC7B7
 * BG-SEC: #EEE2DC
 * SHADE: #BAB2B5
 * PRIMARY: #123C69
 * SECONDARY: #AC3B61
 */

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: indigo[500],
      contrastText: grey[50]
    },
    secondary: {
      light: pink[100],
      main: pink['A700'],
      contrastText: grey[50]
    },
    text: {
      primary: indigo[500],
      secondary: '#AC3B61'
    },
    background: {
      default: red[50]
    }
  },
  typography: {
    h1: {
      fontSize: '5rem'
    }
  },
});

export default theme;
