import {
  Grid,
  Typography,
  Button,
  Box
} from '@material-ui/core'

import DescriptionIcon from '@material-ui/icons/Description';

const About = (props) => {
  const downloadResume = () => {
    alert('Download')
  }
  return (
    <>
      <Grid
        item
        xs={12}>
        <Typography
          variant="h1"
          component="div"
          align="center">
            Pablo Garin
        </Typography>
        <Typography
          variant="h3"
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
