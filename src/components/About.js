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

const About = (props) => {
  const {
    isMobile
  } = props;
  const skillSet = [
    {
      avatar: "JS",
      name: 'JavaScrip',
      proficiency: 'Professional'
    },
    {
      avatar: "PY",
      name: 'Python',
      proficiency: 'Professional'
    },
    {
      name: 'HTML5',
      proficiency: 'Professional'
    },
    {
      name: 'CSS3',
      proficiency: 'Professional'
    }
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
        <Grid item md={6} justify="center">
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
              </ListItem>
            ))}
          </List>
        </Grid>
    </Grid>
  )
}

export default About
