import {
  Box,
  Typography
} from '@material-ui/core';
import moment from 'moment';


const ExperienceDate = (props) => {
  const { startDate, endDate } = props;
  const formattedStartDate = moment(startDate).format('MMM YY')
  const formattedEndDate = endDate
    ? moment(endDate).format('MMM YY')
    : 'now';
  return (
    <Box style={{paddingTop: 10}}>
      <Typography variant="body2" color="textSecondary">
        <Typography component="span">
          {formattedStartDate}
          </Typography>
          &nbsp;-&nbsp;
          <Typography component="span">
            {formattedEndDate}
          </Typography>
      </Typography>
    </Box>
  )
}

export default ExperienceDate
