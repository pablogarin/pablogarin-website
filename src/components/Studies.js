import {Box, Grid, Typography} from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const Studies = () => {
  return (
    <Grid item xs={9}>
      <Box>
        <Typography variant="h4">
          Bachelor of Applied Science in Software Engineering
        </Typography>
        <Typography variant="h6" color="secondary"><SchoolIcon/> AIEP Institute, Santiago, Chile</Typography>
        <Typography variant="h6" color="secondary"><CalendarTodayIcon/> Mar 2013 - Dec 2017</Typography>
      </Box>
    </Grid>
  )
}

export default Studies
