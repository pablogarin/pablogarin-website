import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import SchoolIcon from '@material-ui/icons/School';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import FormattedDate from './common/FormattedDate';

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    background: 'rgba(60,60,60,0.15)'
  },
  cardAvatar: {
    backgroundColor: theme.palette.primary.main
  }
}));

const Education = (props) => {
  const classes = useStyles();
  const degrees = [
    {
      name: "Associate Degree in Computer Programming",
      school: "AIEP Institute",
      location: "Santiago, Chile",
      startDate: "2013-03-01",
      endDate: "2015-12-01",
      achievements: [
        "Graduated with honors (Cum Laude)"
      ]
    },
    {
      name: "Associate in Applied Science in Programming and Systems Analysis",
      school: "AIEP Institute",
      location: "Santiago, Chile",
      startDate: "2013-03-01",
      endDate: "2016-12-01",
      achievements: [
        "Graduated with honors (Cum Laude)"
      ]
    },
    {
      name: "Bachelor of Applied Science in Software Engineering",
      school: "AIEP Institute",
      location: "Santiago, Chile",
      startDate: "2013-03-01",
      endDate: "2017-12-01",
      achievements: [
        "Graduated with honors (Summa Cum Laude)",
        "Commendation for “highest academic achievement”",
        "Class representative"
      ]
    }
  ]
  return (
    <Grid
      item
      container
      justify="center"
      alignItems="flex-start"
      spacing={2}
      style={{margin:'16px 0'}}>
        {degrees.map(degree => (
          <Grid
            key={degree.name}
            item
            xs={9}
            md={3}>
            <Card
              raised
              elevation={3}>
              <CardHeader
                avatar={
                  <Avatar className={classes.cardAvatar}>
                    <SchoolIcon />
                  </Avatar>
                }
                title={
                  <Typography variant="h5" color="secondary">{degree.name}</Typography>
                }
                subheader={`${degree.school}, ${degree.location}`}
                className={classes.cardHeader}/>
              <CardContent>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <CalendarTodayIcon color="secondary"/>
                    </ListItemIcon>
                    <ListItemText 
                      primary={
                        <Typography fontWeight={600}>
                          <FormattedDate
                            date={degree.startDate} />
                          &nbsp;-&nbsp;
                          <FormattedDate
                            date={degree.endDate} />
                          </Typography>
                      }
                    />
                  </ListItem>
                  {degree.achievements.map(achievement => (
                    <ListItem key={achievement}>
                      <ListItemIcon>
                        <CheckCircleIcon color="secondary"/>
                      </ListItemIcon>
                      <ListItemText
                        primary={achievement} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  )
}

export default Education;
