import {
  useEffect,
  useRef,
  useState
} from 'react'
import {Box, Typography} from '@material-ui/core';
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
    background: theme.palette.primary.light
  },
  percentageText: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }
}));

const CompletionBar = (props) => {
  const canvasRef = useRef(null);
  const {
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
    canvas.width = width;
    const context = canvas.getContext('2d');
    let fillStep = width*value*0.03; // constant speed fill
    let currentFill = 0.1; // start fill value
    let animationFrameId;
    const fillBar = () => {
      if (currentFill/width >= value) {
        cancelAnimationFrame(animationFrameId);
        return
      }
      const speedMultiplier = getSpeed(Math.ceil((currentFill*100)/(value*width)));
      currentFill += fillStep*(speedMultiplier > 0.05 ? speedMultiplier : 0.05);
      if (currentFill/width > value) currentFill = value*width
      animationFrameId = requestAnimationFrame(fillBar);
      context.clearRect(0, 0, width, height);
      context.beginPath();
      context.rect(0,0,currentFill, height);
      context.fillStyle = `hsl(${(currentFill/width)*100}, 75%, 50%)`;
      context.fill();
      context.closePath();
    };
    if (start) fillBar();
    setPercentage(`${value*100}%`)
  }, [height, width, value, start])
  return (
    <Box
      border={1}
      borderRadius="borderRadius"
      borderColor="primary.light"
      m={0}
      p={0}
      className={classes.root}
      style={{
        height,
        width
      }}
    >
      <Typography
        className={classes.percentageText}
      >
        {percentage}
      </Typography>
      <canvas
        ref={canvasRef}
      />
    </Box>
  )
}

export default CompletionBar
