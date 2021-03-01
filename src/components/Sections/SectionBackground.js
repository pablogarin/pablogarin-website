import React from 'react'
import {
  makeStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100vw',
  },
  container: {
    position: 'absolute',
    width: '100vw',
    overflowX: 'hidden',
    zIndex: -1,
    height: 520
  },
  odd: {
    backgroundColor: 'rgba(230,230,230,0.75)',
  }
}));

const SectionBackground = (props) => {
  const classes = useStyles();
  const { parity } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={parity === 'odd' ? classes.odd : ''} />
      </div>
    </div>
  )
}

export default SectionBackground
