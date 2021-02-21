import {
  useEffect,
  useRef,
  useState
} from 'react';

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';

import CompletionBar from './common/CompletionBar';

const About = (props) => {
  const container = useRef(null);
  const [showContent, setShowContent] = useState(false);
  const {
    isMobile,
    scrollPosition
  } = props;
  useEffect(() => {
    if (!showContent && scrollPosition > container.current.offsetTop-window.innerHeight/1.3) {
      setShowContent(true);
    }
  }, [showContent, scrollPosition]);
  const skillSet = [
    {
      avatar: "JS",
      name: 'JavaScrip',
      proficiency: 'Professional',
      progress: 0.95
    },
    {
      avatar: "PY",
      name: 'Python',
      proficiency: 'Professional',
      progress: 0.95
    },
    {
      avatar: 'H5',
      name: 'HTML5',
      proficiency: 'Professional',
      progress: 0.98
    },
    {
      avatar: 'C3',
      name: 'CSS3',
      proficiency: 'Professional',
      progress: 0.98
    },
    {
      avatar: 'N',
      name: 'NodeJS',
      proficiency: 'Professional',
      progress: 0.95
    },
    {
      avatar: 'R',
      name: 'ReactJS',
      proficiency: 'Professional',
      progress: 0.90
    },
  ]
  return (
    <Grid
      item
      container
      alignItems="center"
      justify="space-between"
      direction="row"
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
          md={6}>
            <Grid item md={9}>
              <Card variant="outlined" style={{
                border: 'none',
              }}>
                <CardMedia
                  style={{
                    height: 200,
                    backgroundSize: 'auto 100%',
                  }}
                  image="/res/images/profile.png"
                />
                <CardHeader
                  title={<Typography variant="h5" color="secondary">
                    Pablo Garin
                  </Typography>}
                />
                <CardContent>
                  I'm an Engineer, but for me it's not my job description, it's my lifestyle.
                  If there's something to fix, I'm there to fix it.
                  <br/>
                  Also, I'm a big rocket nerd, ask me about anything rocket related, and I'll
                  probably have an answer!
                </CardContent>
              </Card>
            </Grid>
        </Grid>
        <Grid container item md={6} justify="center" ref={container}>
          <Grid item xs={9}>
            <Typography variant="h4">
              Core Skills
            </Typography>
            <List>
              {skillSet.map(skill => (
                <ListItem key={skill.name}>
                  <ListItemAvatar>
                      <Avatar>
                        {skill.avatar ? skill.avatar : <CodeIcon />}
                      </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={skill.name}
                    secondary={skill.proficiency}
                  />
                  <CompletionBar
                    width={300}
                    height={20}
                    percentage
                    value={skill.progress}
                    in={showContent}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
    </Grid>
  )
}

export default About
