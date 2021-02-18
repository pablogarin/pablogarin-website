import {
  useState,
  useEffect
} from 'react';

import {
  Box,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import ExperienceDate from './ExperienceDate';

const Experience = (props) => {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    fetch('https://api.pablogarin.dev/experience').then((response) => {
      response.json().then(({experiences}) => {
        setExperiences(experiences)
      });
    });
  }, [])
  const {
    isMobile
  } = props;
  return (
    <Grid
      item
      container
      direction="row"
      justify="flex-start"
      xs={10}
      md={6}>
      <Timeline align={isMobile ? 'left' : 'alternate'}>
        {experiences.map((job, i) => (
          <TimelineItem key={job.id}>
            <TimelineOppositeContent style={{flex: (isMobile ? 0 : 1)}}>
              {!isMobile && (
              <ExperienceDate
                startDate={job.startDate}
                endDate={job.endDate} />
              )}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <CalendarTodayIcon />
              </TimelineDot>
              {experiences.length > i+1 && (<TimelineConnector />)}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} style={{padding: '6px 12px', marginBottom: 30}}>
                <Typography variant="subtitle1" color="textPrimary">
                  {job.jobTitle}
                </Typography>
                <Typography color="textSecondary">
                  {job.companyName}
                </Typography>
                {isMobile && (
                  <ExperienceDate
                    startDate={job.startDate}
                    endDate={job.endDate} />
                )}
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Grid>
  )
}

export default Experience
