import React, {
  useRef,
  useState
} from 'react'
import {
  Slide,
} from '@material-ui/core';

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import useScrollYPosition from '../../hooks/useScrollYPosition';

import ExperienceDate from './ExperienceDate';
import JobDescription from './JobDescription';

const TimelineElement = (props) => {
  const [showElement, setShowElement] = useState(false);
  const elementRef = useRef(null);
  const {
    job,
    isLast,
    odd
  } = props;
  const isMobile = false;
  useScrollYPosition((position) => {
    if (position > elementRef.current.offsetTop-window.innerHeight/1.3) {
      setShowElement(true);
    }
  });
  return (
    <Slide
      direction={odd ? 'right' : 'left'}
      in={showElement}
      appear={true}
    >
      <TimelineItem ref={elementRef}>
        <TimelineOppositeContent style={{flex: (isMobile ? 0.1 : 1)}}>
          <ExperienceDate
            isMobile={isMobile}
            startDate={job.startDate}
            endDate={job.endDate}
          />
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <CalendarTodayIcon />
          </TimelineDot>
          {!isLast && (<TimelineConnector />)}
        </TimelineSeparator>
        <TimelineContent>
          <JobDescription job={job}/>
        </TimelineContent>
      </TimelineItem>
    </Slide>
  )
}

export default TimelineElement
