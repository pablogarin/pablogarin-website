import React, {
  useState,
} from 'react';
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Zoom
} from '@material-ui/core';
import {
  makeStyles,
  useTheme
} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SectionsMenu from './SectionsMenu';
import useScrollYPosition from '../../hooks/useScrollYPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
    boxShadow: 'none',
    color: theme.palette.text.primary,
    transition: '.3s'
  },
  hidden: {
    background: 'transparent',
  },
  menuButton: {
    position: 'absolute',
    right: theme.spacing(2)
  },
  menuButtonIcon: {
    position: 'absolute'
  }
}));

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const classes = useStyles();
  const theme = useTheme();
  const {
    isMobile,
    sections,
  } = props;
  useScrollYPosition((position) => {
    let currActiveSection = null;
    for(let key in sections) {
      sections[key].isActive = false;
      const currSection = sections[key];
      if (currSection.ref.current.offsetTop <= position+70 || currActiveSection === null) {
        currActiveSection = key
      }
    }
    if (activeSection === currActiveSection) return;
    setShowBar(currActiveSection !== 'home');
    setActiveSection(currActiveSection);
  });
  // Local functions
  const selectView = (ref) => {
    const scrollPromise = new Promise((resolve, reject) => {
      if (!ref) return reject();
      let currentPos = window.pageYOffset;
      const targetPos = ref.current.offsetTop;
      if (targetPos !== currentPos ) {
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        })
      }
      resolve();
    });
    scrollPromise.then(() => {
      if (menuOpen) setMenuOpen(false);
    });
  };
  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  };
  const transitionConfig = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };
  return (
    <AppBar className={[classes.root, (!showBar || isMobile ? classes.hidden : '')].join(' ')}>
      <Toolbar align="right">
        {isMobile && (
          <>
            <IconButton
              edge="end"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={menuHandler}>
                <MenuIcon style={{opacity: 0}}/>
                <Zoom
                  in={!menuOpen}
                  timeout={transitionConfig}
                  style={{
                    transitionDelay: `${!menuOpen ? transitionConfig.exit : 0}ms`,
                  }}
                  unmountOnExit>
                    <MenuIcon className={classes.menuButtonIcon} />
                </Zoom>
                <Zoom
                  in={menuOpen}
                  timeout={transitionConfig}
                  style={{
                    transitionDelay: `${menuOpen ? transitionConfig.exit : 0}ms`,
                  }}
                  unmountOnExit>
                    <CloseIcon className={classes.menuButtonIcon} />
                </Zoom>
            </IconButton>
          </>
        )}
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center">
          <Grid item md={5} style={{textAlign:'right'}}>
            <SectionsMenu
              activeSection={activeSection}
              isMobile={isMobile}
              sections={sections}
              selectView={selectView}
              open={isMobile ? menuOpen : true}/>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
