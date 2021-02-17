import {
  Button,
  Typography,
  AppBar,
  Toolbar,
  Grid
} from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = (theme) => (makeStyles({
  root: {
    background: 'transparent',
    boxShadow: 'none',
    color: theme.palette.text.primary
  }
}));

const Header = () => {
  const theme = useTheme();
  const classes = useStyles(theme)();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center">
          <Grid item xs style={{textAlign:'right'}}>
            <Button >About</Button>
            <Button >Studies</Button>
            <Button >Experience</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
