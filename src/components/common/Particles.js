import React, {
  useRef,
  useEffect,
} from 'react';
import {
  colorHexToObject,
  drawCircle,
  animate
} from './canvasHelper';

import {
  useTheme,
  makeStyles
} from '@material-ui/core/styles';

const createRandomParticle = (color, radius) => {
  const size = radius ? radius : Math.random() * 0.5 + 1;
  return {
    x: Math.random()*window.innerWidth,
    y: Math.random()*window.innerHeight,
    directionX: Math.random() * 1 - 0.5,
    directionY: Math.random() * 1 - 0.5,
    radius: size,
    color: {
      red: 255,
      green: 255,
      blue: 255,
      alpha: Math.ceil(Math.random() * 255),
      ...color,
    },
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    position:'absolute',
    top:0,
    left:0,
    width: '100%',
    height: '100%',
  }
}));

const Particles = (props) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const theme = useTheme();
  const { amount } = props;
  const classes = useStyles();
  useEffect(() => {
    // Canvas setup
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Context setup
    const context = canvas.getContext('2d');
    contextRef.current = context;
    // Generate particles
    const particles = []
    for (let i = 0; i < amount; i++) {
      const particle = createRandomParticle(colorHexToObject(theme.palette.primary.main));
      particles.push(particle);
    }
    // Animation
    const mouse = {
      x: 0,
      y: 0,
      radius: (canvas.width/100) * (canvas.height/100)
    }
    window.addEventListener('mousemove', (evt) => {
      mouse.x = evt.x;
      mouse.y = evt.y;
    });
    window.addEventListener('resize', () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    });
    const update = (particle, mouse, index) => {
      if (particle.x > canvas.width || particle.x < 0) {
        particle.directionX = -particle.directionX;
      }
      if (particle.y > canvas.height || particle.y < 0) {
        particle.directionY = -particle.directionY;
      }
      let dx = mouse.x - particle.x;
      let dy = mouse.y - particle.y;
      let distance = Math.sqrt(dx**2 + dy**2);
      const PADDING = 2;
      if (distance < mouse.radius + particle.radius) {
        if (mouse.x < particle.x && particle.x < canvas.width - particle.radius * PADDING) {
          particle.x += PADDING
          particle.directionX *= -1;
        }
        else if (mouse.x > particle.x && particle.x > particle.radius * PADDING) {
          particle.x -= PADDING
          particle.directionX *= -1;
        }
        if (mouse.y < particle.y && particle.y < canvas.height - particle.radius*PADDING) {
          particle.y += PADDING;
          particle.directionY *= -1;
        }
        else if (mouse.y > particle.y && particle.y > particle.radius*PADDING) {
          particle.y -= PADDING;
          particle.directionY *= -1;
        }
      }
      particle.x += particle.directionX;
      particle.y += particle.directionY;
      drawCircle(particle, context);
    };
    const connectDots = (particles) => {
      const canvas = canvasRef.current
      const context = contextRef.current
      const maxDistance = (canvas.width/Math.ceil(amount/15)) * (canvas.height/Math.ceil(amount/15))
      const lineColor = colorHexToObject('#086972');
      for (let i = 0; i < particles.length; i++) {
        for (let j = i+1; j < particles.length; j++) {
          const xd = particles[i].x - particles[j].x;
          const yd = particles[i].y - particles[j].y;
          let distance = xd**2+yd**2;
          if(distance < maxDistance) {
            const opacity = 1 - distance/20000;
            const lineIntensity = `rgba(${lineColor.red}, ${lineColor.green}, ${lineColor.blue}, ${opacity})`;
            // console.log(lineIntensity)
            context.strokeStyle = lineIntensity;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y)
            context.lineTo(particles[j].x, particles[j].y)
            context.stroke()
            context.closePath();
          }
        }
      }
    }
    animate(canvas, context, () => {
      particles.forEach((particle, i) => {
        update(particle, mouse);
      })
      connectDots(particles);
    });
  }, [theme, amount]);
  return (
    <canvas
      ref={canvasRef}
      className={classes.root}
    />
  )
}

export default Particles
