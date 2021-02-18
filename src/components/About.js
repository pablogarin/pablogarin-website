import {
  Grid,
  Typography,
  Button,
  Box
} from '@material-ui/core'

import DescriptionIcon from '@material-ui/icons/Description';

const About = (props) => {
  const { isMobile } = props;
  const downloadResume = () => {
    alert('Download')
  }
  return (
    <>
      <Grid
        item
        xs={12}>
        <Typography
          variant={isMobile ? 'h2' : 'h1'}
          component="div"
          align="center">
            Pablo Garin
        </Typography>
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          component="div"
          align="center"
          color="secondary">
            Full-stack Developer
        </Typography>
        <Box
          align="center"
          padding={5}>
          <Button
            startIcon={<DescriptionIcon />}
            variant="contained"
            size="large"
            color="secondary"
            onClick={() => downloadResume()}>
              Download Resume
          </Button>
        </Box>
      </Grid>
    </>
  )
}

export default About
