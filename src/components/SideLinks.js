import {
  useState
} from 'react';
import {
  Backdrop,
  Box,
  Zoom
} from '@material-ui/core';
import {
  SpeedDial,
  SpeedDialAction
} from '@material-ui/lab';
import {
  makeStyles,
  useTheme
} from '@material-ui/core/styles';
import LinkIcon from '@material-ui/icons/Link';
import CloseIcon from '@material-ui/icons/Close';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    transform: 'translateZ(0px)',
    flexGrow: 1,
    bottom: 0,
    left: 0
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
  iconPosition: {
    position: 'absolute'
  }
}));

const SideLinks = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const transitionConfig = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }
  const links = [
    {
      icon: <GitHubIcon />,
      name: 'GitHub',
      url: 'https://github.com/pablogarin/'
    },
    {
      icon: <LinkedInIcon />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pablo-garin/'
    }
  ]
  const goTo = (url) => {
    window.open(url);
  };
  return (
    <Box className={classes.root}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="External Links"
        open={open}
        icon={(<>
          <Zoom
            in={open}
            timeout={transitionConfig}
            style={{
              transitionDelay: `${open ? transitionConfig.exit : 0}ms`,
            }}
            unmountOnExit>
            <CloseIcon className={classes.iconPosition}/>
          </Zoom>
          <Zoom
            in={!open}
            timeout={transitionConfig}
            style={{
              transitionDelay: `${!open ? transitionConfig.exit : 0}ms`,
            }}
            unmountOnExit>
            <LinkIcon className={classes.iconPosition}/>
          </Zoom>
        </>)}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        direction="up"
        className={classes.speedDial}>
          {links.map((link) => (
            <SpeedDialAction
              key={link.name}
              icon={link.icon}
              tooltipTitle={link.name}
              tooltipPlacement="right"
              tooltipOpen
              onClick={() => goTo(link.url)}
            />
          ))}
      </SpeedDial>
    </Box>
  )
}

export default SideLinks
