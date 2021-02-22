import React, {
  useState,
  useEffect
} from 'react';
// import {makeStyles} from '@material-ui/core/styles';
import {
  Grid,
} from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';

import TimelineElement from './TimelineElement'

/*
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
*/

const Experience = (props) => {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    fetch('https://api.pablogarin.dev/experience').then((response) => {
      response.json().then(({experiences}) => {
        setExperiences(experiences)
      });
    });
  }, [])
  // const classes = useStyles();
  const {
    isMobile,
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
          <TimelineElement
            job={job}
            odd={i%2 !== 0}
            key={job.id}
            isLast={experiences.length - 1 === i}
          />
        ))}
      </Timeline>
    </Grid>
  )
}

export default Experience
