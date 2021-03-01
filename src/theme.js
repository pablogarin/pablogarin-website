import { createMuiTheme } from '@material-ui/core/styles'
import {indigo, grey, pink} from '@material-ui/core/colors'

/**
 * #a7ff83
 * #17b978
 * #086972
 * #071a52
 */

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#17b978',
      contrastText: grey[50]
    },
    secondary: {
      main: '#a7ff83',
      contrastText: grey[50]
    },
    text: {
      primary: '#efefef',
      secondary: '#17b978'
    },
    background: {
      default: '#071A52'
    }
  },
  typography: {
    h1: {
      fontSize: '5rem'
    }
  },
});

export default theme;
