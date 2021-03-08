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
  card: {
    position: 'relative',
    borderTop: '5px solid #008080',
    '&::after': {
      display: 'block',
      position: 'absolute',
      height: '275px',
      width: '275px',
      content: '""',
      backgroundImage: 'url(/res/images/degree_seal.svg)',
      backgroundRepeat: 'no-repeat',
      right: -50,
      bottom: -40,
      opacity: 0.1
    }

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
      alignItems="space-between"
      spacing={2}
      style={{margin:'16px 0'}}>
        {degrees.map(degree => (
          <Grid
            key={degree.name}
            item
            xs={9}
            md={3}
            style={{
              display: 'flex'
            }}
          >
            <Card
              raised
              elevation={3}
              style={{
                flex: '1'
              }}
              className={classes.card}
            >
              <CardHeader
                title={
                  <Typography
                    variant="h5"
                    style={{
                      color : '#008080',
                      padding: '12px 16px',
                      fontWeight: 700
                    }}
                    align="center"
                  >{degree.name}</Typography>
                }
                subheader={(
                  <Typography
                    style={{
                      color: '#333',
                      fontWeight: 700,
                      padding: 12
                    }}
                    align="center"
                  >
                    {degree.school}, {degree.location}
                  </Typography>
                )}
              />
              <CardContent style={{
                paddingTop: 0
              }}>
                <List dense style={{
                  paddingTop: 0,
                  marginTop: -8,
                  fontSize: 10
                }}>
                  <ListItem>
                    <ListItemText 
                      primary={
                        <Typography fontWeight={600} style={{color: '#333', fontSize: '0.8rem' }}>
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
                      <ListItemText
                        primary={(
                          <Typography style={{color: '#333', fontSize: '0.8rem' }}>
                            {achievement}
                          </Typography>
                        )}
                      />
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
