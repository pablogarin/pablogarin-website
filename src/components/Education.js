import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography
} from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const Education = (props) => {
  return (
    <Grid
      item
      container
      justify="center"
      alignItems="flex-start"
      spacing={2}>
        <Grid
          item
          xs={9}
          md={3}>
          <Card
            raised
            elevation={3}>
            <CardHeader
              avatar={
                <Avatar>
                  <SchoolIcon />
                </Avatar>
              }
              title={
                <Typography variant="h5" color="secondary">Associate in Applied Science in Programming and Systems Analysis</Typography>
              }
              subheader="AIEP Institute, Santiago, Chile"/>
            <CardContent>
              <Typography variant="subtitle1" component="div"><CalendarTodayIcon/> Mar 2013 - Dec 2016</Typography>
              <Box style={{padding: '8px 0'}}>
                <Typography variant="body2" paragraph>
                  Graduated with honors (Cum Laude)
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={9}
          md={3}>
          <Card
            raised
            elevation={3}>
            <CardHeader
              avatar={
                <Avatar>
                  <SchoolIcon />
                </Avatar>
              }
              title={
                <Typography variant="h5" color="secondary">Bachelor of Applied Science in Software Engineering</Typography>
              }
              subheader="AIEP Institute, Santiago, Chile"/>
            <CardContent>
              <Typography variant="subtitle1" component="div"><CalendarTodayIcon/> Mar 2013 - Dec 2017</Typography>
              <Box style={{padding: '8px 0'}}>
                <Typography variant="body2" paragraph>
                  Graduated with honors (Summa Cum Laude), Commendation for “highest academic achievement”, class representative
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
    </Grid>
  )
}

export default Education;
