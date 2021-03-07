import React, {
  useEffect,
  useRef,
  useState
} from 'react'
import PropTypes from 'prop-types'
import {Avatar, Box, Typography} from '@material-ui/core';
import {
  makeStyles
} from '@material-ui/core/styles'

const getSpeed = (x) => {
  // Speed set by inverted Parabola
  // coordinates (x, y):
  //  - Peak velocity: 50, 100
  //  - Min value: 0, 0
  //  - Max value: 100, 0
  // Result:
  //     -X^2+100X
  // Y = ----------
  //         25
  return ((-1*Math.pow(x,2)+100*x)/25)/100;
}

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    position: 'relative',
    left: -15,
    width: 'calc(100% + 15px)'
  },
  bar: {
    position: 'absolute',
    left: 40,
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    background: '#008080',
  },
  icon: {
    height: 55,
    width: 55,
    fontSize: 35,
    lineHeight: 55,
    color: '#008080',
    background: '#fff',
    overflow: 'hidden',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 100,
    flex: '0 0 75px',
  },
  percentageText: {
    position: 'absolute',
    color: theme.palette.text.main,
    right: 25,
    top: '50%',
    transform: 'translateY(-50%)',
    lineHeight: 46,
    fontSize: 32
  },
  canvas: {
    width: '100%',
  }
}));

const CompletionBar = (props) => {
  const canvasRef = useRef(null);
  const {
    avatar,
    width,
    height,
    value,
  } = props;
  const start = props.in !== undefined ? props.in : true;
  const [percentage, setPercentage] = useState('0%')
  const classes = useStyles();
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.height = height;
    if (width === '100%') {
      canvas.width = canvas.getBoundingClientRect().width
    } else {
      canvas.width = width;
    }
    console.log(canvas.width)
    const context = canvas.getContext('2d');
    let fillStep = canvas.width*value*0.03; // constant speed fill
    let currentFill = 0.1; // start fill value
    let animationFrameId;
    const fillBar = () => {
      if (currentFill/canvas.width >= value) {
        cancelAnimationFrame(animationFrameId);
        return
      }
      const speedMultiplier = getSpeed(Math.ceil((currentFill*100)/(value*canvas.width)));
      currentFill += fillStep*(speedMultiplier > 0.05 ? speedMultiplier : 0.05);
      if (currentFill/canvas.width > value) currentFill = value*canvas.width
      animationFrameId = requestAnimationFrame(fillBar);
      context.clearRect(0, 0, canvas.width, height);
      context.beginPath();
      context.rect(0,0,currentFill, height);
      // context.fillStyle = `hsl(${(currentFill/canvas.width)*100}, 75%, 50%)`;
      context.fillStyle = `rgba(255, 255, 255, 0.35)`;
      context.fill();
      context.closePath();
    };
    if (start) fillBar();
    setPercentage(`${value*100}%`)
  }, [height, width, value, start])
  return (
    <div className={classes.root}>
      <Box className={classes.icon}>
        {avatar}
      </Box>
      <Box
        m={0}
        p={0}
        className={classes.bar}
        style={{
          height
        }}
      >
        <Typography
          className={classes.percentageText}
        >
          {percentage}
        </Typography>
        <canvas
          className={classes.canvas}
          ref={canvasRef}
        />
      </Box>
    </div>
  )
}

CompletionBar.propTypes = {
  avatar: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  height: PropTypes.number,
  width: PropTypes.any,
}

CompletionBar.defaultProps = {
  height: 50,
  width: '100%'
}

export default CompletionBar
