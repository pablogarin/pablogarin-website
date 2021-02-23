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
    width: '120vw',
    height: 400,
    transformOrigin: 'center',
    transform: 'translateX(-10vw) rotate3d(0, 0, 1, 5deg)',
    marginTop: 60
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
