import {
  useState,
  useEffect
} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
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
import JobDescription from './JobDescription';

const useStyles = makeStyles((theme) => ({
  jobDescription: {
    padding: '0px 12px',
    marginBottom: 30,
    [theme.breakpoints.down("sm")]: {
      marginTop: -8,
      marginLeft: -4
    }
  }
}));

const Experience = (props) => {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    fetch('https://api.pablogarin.dev/experience').then((response) => {
      response.json().then(({experiences}) => {
        setExperiences(experiences)
      });
    });
  }, [])
  const classes = useStyles();
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
            <TimelineOppositeContent style={{flex: (isMobile ? 0.1 : 1)}}>
              <ExperienceDate
                isMobile={isMobile}
                startDate={job.startDate}
                endDate={job.endDate} />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <CalendarTodayIcon />
              </TimelineDot>
              {experiences.length > i+1 && (<TimelineConnector />)}
            </TimelineSeparator>
            <TimelineContent>
              <JobDescription job={job}/>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Grid>
  )
}

export default Experience
