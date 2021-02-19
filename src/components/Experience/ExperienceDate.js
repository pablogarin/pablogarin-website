import {
  Box,
  Typography
} from '@material-ui/core';
import {
  makeStyles,
} from '@material-ui/core/styles';
import FormattedDate from '../common/FormattedDate';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 10,
    marginLeft: -4,
    marginRight: -4
  },
  paragraph: {
    [theme.breakpoints.down("sm")]: {
      marginTop: -12,
    }
  },
  date: {
    [theme.breakpoints.down("sm")]: {
      display: 'block',
      width: 40
    },
  }
}))


const ExperienceDate = (props) => {
  const {
    startDate,
    endDate,
    isMobile,
  } = props;
  const classes = useStyles();
  const stringFormat = isMobile ? 'MM/YY' : 'MMM YYYY';
  return (
    <Box className={classes.root}>
      <Typography
        variant="body2"
        color="textSecondary"
        className={classes.paragraph}>
          <Typography component="span" className={classes.date}>
          <FormattedDate
            date={startDate}
            format={stringFormat}/>
          </Typography>
          { !isMobile && ' - ' }
          <Typography component="span" className={classes.date}>
            {endDate
            ? (<FormattedDate
              date={endDate}
              format={stringFormat}/>)
            : 'Now'}
          </Typography>
      </Typography>
    </Box>
  )
}

export default ExperienceDate
