import {
  useState,
  useEffect
} from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    fetch('https://api.pablogarin.dev/experience').then((response) => {
      response.json().then(({experiences}) => {
        setExperiences(experiences)
      });
    })    
  }, [])
  return (
    <>
      <Box component="div">
        <Timeline align="alternate">
          {experiences.map((job, i) => (
            <TimelineItem key={job.id}>
              <TimelineOppositeContent>
                <Box style={{paddingTop: 10}}>
                <Typography variant="body2" color="textSecondary">
                  <Typography component="span">
                    {new Date(job.startDate).toLocaleDateString()}
                    </Typography>
                    &nbsp;-&nbsp;
                    <Typography component="span">
                      {job.endDate ? new Date(job.endDate).toLocaleDateString() : 'now'}
                    </Typography>
                </Typography>
                </Box>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  <CalendarTodayIcon />
                </TimelineDot>
                {experiences.length > i+1 && (<TimelineConnector />)}
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} style={{padding: '6px 12px'}}>
                  <Typography variant="subtitle1" color="textPrimary">
                    {job.jobTitle}
                  </Typography>
                  <Typography color="textSecondary">
                    {job.companyName}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </>
  )
}

export default Experience
