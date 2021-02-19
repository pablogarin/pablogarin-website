import {
  Grid,
  Typography,
  Button,
  Box
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    marginBottom: -56
  },
  downloadButton: {
    color: theme.palette.secondary.light,
    borderColor: theme.palette.secondary.light,
    borderWidth: 2
  }
}))

const About = (props) => {
  const { isMobile } = props;
  const classes = useStyles();
  const downloadResume = () => {
    window.open('https://docs.google.com/document/d/1GhlNMhgt4ANRdmh9V5WOWPXP0y2LFrbILE3GlD-TfAU/edit?usp=sharing')
  }
  return (
    <Grid
      item
      container
      alignItems="center"
      justify="center"
      className={classes.root}>
        <Grid
          item
          xs={10}>
          <Typography
            variant={isMobile ? 'h2' : 'h1'}
            component="h1"
            align="center">
              Hi! I'm <Typography variant="span" color="secondary" style={{fontWeight: 500}}>Pablo Garin!</Typography>
          </Typography>
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            component="div"
            align="center"
            color="primary">
              I'm a Full-Stack Web Developer.
          </Typography>
          <Box
            align="center"
            padding={5}>
            <Button
              startIcon={<DescriptionIcon />}
              variant="outlined"
              size={isMobile ? 'small' : 'large'}
              onClick={() => downloadResume()}
              className={classes.downloadButton}>
                Download Resume
            </Button>
          </Box>
        </Grid>
    </Grid>
  )
}

export default About
