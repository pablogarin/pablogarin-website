import React, {
  useRef,
  useState
} from 'react';

import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Slide,
  Typography
} from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles } from '@material-ui/core/styles';
import {
  DiJsBadge,
  DiPython,
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiReact
} from "react-icons/di";

import CompletionBar from './common/CompletionBar';
import useScrollYPosition from '../hooks/useScrollYPosition';


const useStyles = makeStyles((theme) => ({
  aboutMe: {
    background: 'white',
    height: 'calc(100vh - 190px)',
    clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)',
    color: '#333'
  },
  roundImage: {
    display: 'block',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0 auto'
  }
}))

const About = (props) => {
  const container = useRef(null);
  const [showSkills, setShowSkills] = useState(false);
  const {
    isMobile
  } = props;
  useScrollYPosition((position) => {
    const content = container.current;
    if (!content) return;
    if (position > content.offsetTop-window.innerHeight/5) {
      setShowSkills(true);
    }
  });
  const classes = useStyles();
  const skillSet = [
    {
      avatar: (<DiJsBadge />),
      name: 'JavaScript',
      proficiency: 'Professional',
      progress: 0.95
    },
    {
      avatar: (<DiPython />),
      name: 'Python',
      proficiency: 'Professional',
      progress: 0.95
    },
    {
      avatar: (<DiHtml5 />),
      name: 'HTML5',
      proficiency: 'Professional',
      progress: 0.98
    },
    {
      avatar: (<DiCss3 />),
      name: 'CSS3',
      proficiency: 'Professional',
      progress: 0.98
    },
    {
      avatar: (<DiNodejsSmall />),
      name: 'NodeJS',
      proficiency: 'Professional',
      progress: 0.95
    },
    {
      avatar: (<DiReact />),
      name: 'ReactJS',
      proficiency: 'Professional',
      progress: 0.90
    },
  ]
  return (
    <Slide
      direction="right"
      in={showSkills}
      appear={true}
    >
      <Grid
        item
        container
        alignItems="center"
        justify="space-between"
        direction="row"
        ref={container}
        style={{
          minHeight: '100vh',
          marginTop: (isMobile ? 'inherit' : -56),
          marginBottom: (isMobile ? 'inherit' : -56),
        }}>
          <Grid
            item
            container
            alignItems="center"
            justify="center"
            md={6}
            className={classes.aboutMe}
          >
            <Grid item md={9}>
              <img src="/res/images/profile.png" className={classes.roundImage} />
              <Typography
                variant="h5"
                color="primary"
                style={{
                  width: '100%',
                  textAlign: 'center',
                  lineHeight: '64px',
                }}
              >
                Pablo Garin
              </Typography>
              <Typography>
                I'm an Engineer, but for me it's not my job description, it's my lifestyle.
                If there's something to fix, I'm there to fix it.
                <br/>
                Also, I'm a big rocket nerd, ask me about anything rocket related, and I'll
                probably have an answer!
              </Typography>
            </Grid>
          </Grid>
        <Grid container item md={6} justify="flex-start">
          <Grid item xs={9}>
            <Box  pl={4}>
              <Typography variant="h4">
                Core Skills
              </Typography>
              <List>
                {skillSet.map(skill => (
                  <ListItem key={skill.name}>
                    <CompletionBar
                      avatar={skill.avatar ? skill.avatar : <CodeIcon />}
                      height={40}
                      percentage
                      value={skill.progress}
                      in={showSkills}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Slide>
  )
}

export default About
