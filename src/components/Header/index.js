import {
  useState,
  useEffect
} from 'react';
import {
  AppBar,
  Box,
  Drawer,
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

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'transparent',
    boxShadow: 'none',
    color: theme.palette.text.primary
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const {
    activeSection,
    isMobile,
    setActiveSection,
    sections,
  } = props;
  useEffect(() => {
    let currActiveSection = null;
    for(let key in sections) {
      sections[key].isActive = false;
      const currSection = sections[key];
      if (currSection.ref.current.offsetTop <= scrollPosition || currActiveSection === null) {
        currActiveSection = key
      }
    }
    setActiveSection(currActiveSection);
  }, [scrollPosition, sections, setActiveSection]);
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
  }
  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  }
  window.addEventListener('scroll', (evt) => {
    setScrollPosition(window.pageYOffset+10);
  })
  const transitionConfig = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }
  return (
    <AppBar className={classes.root}>
      <Toolbar align="right">
        {isMobile
        ? (
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
            <Drawer
              anchor="right"
              open={menuOpen}
              onClose={menuHandler}
              >
                <Box style={{height:56, width: 200}} />
                <SectionsMenu
                    activeSection={activeSection}
                    sections={sections}
                    selectView={selectView}/>
            </Drawer>
          </>
        ) : (
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center">
            <Grid item xs style={{textAlign:'right'}}>
              <SectionsMenu
                activeSection={activeSection}
                sections={sections}
                selectView={selectView}/>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
