import {
  useEffect,
  useRef,
  useState
} from 'react'
import {
  Box,
  Slide,
} from '@material-ui/core';

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import ExperienceDate from './ExperienceDate';
import JobDescription from './JobDescription';

const TimelineElement = (props) => {
  const [showElement, setShowElement] = useState(false);
  const elementRef = useRef(null);
  const {
    job,
    scrollPosition,
    isLast,
    odd
  } = props;
  const isMobile = false;
  useEffect(() => {
    if (elementRef.current === null) return;
    if (scrollPosition > elementRef.current.offsetTop-window.innerHeight/1.3) {
      setShowElement(true);
    }
  }, [scrollPosition, setShowElement]);
  return (
    <Box ref={elementRef} style={{height: 120}}>
      <Slide
        direction={odd ? 'right' : 'left'}
        in={showElement}
        mountOnEnter
        unmountOnExit
      >
        <TimelineItem>
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
    </Box>
  )
}

export default TimelineElement
