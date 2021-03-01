import 'fontsource-roboto';
import React, {
  useRef,
  useState,
  useEffect
} from 'react';
import {
  CssBaseline
} from '@material-ui/core';
import {
  MuiThemeProvider,
  makeStyles
} from '@material-ui/core/styles';
// Theme
import theme from './theme';
// Custom Components
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Sections from './components/Sections';
import SideLinks from './components/SideLinks';

// Experimental
import Particles from './components/common/Particles';

const useStyles = makeStyles((theme) => ({
  homeSection: {
    /*
    backgroundColor: theme.palette.primary.dark,
    backgroundImage: 'url("/res/images/background.jpg")',
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center',
    */
    minHeight: '100vh',
    [theme.breakpoints.up("sm")]: {
      backgroundSize: '120% auto',
    },
    [theme.breakpoints.down("sm")]: {
      backgroundSize: 'auto 100%',
    }
  },
  aboutSection: {
  }
}))

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    const setResponsiveness = () => {
      window.innerWidth < 900
        ? setIsMobile(true)
        : setIsMobile(false)
    }
    window.addEventListener('resize', setResponsiveness);
    setResponsiveness();
  }, []);
  const sections = {
    'home': {
      buttonText: 'Home',
      ref: useRef(null),
      component: (<Home />),
      styles: classes.homeSection,
    },
    'about': {
      title: 'About Me',
      buttonText: 'About',
      ref: useRef(null),
      component: (<About />),
      styles: classes.aboutSection,
    },
    'studies': {
      title: 'Education',
      buttonText: 'Education',
      ref: useRef(null),
      component: (<Education />),
    },
    'experience': {
      title: 'Job Experience',
      buttonText: 'Experience',
      ref: useRef(null),
      component: (<Experience />),
    }
  }
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        sections={sections}
        isMobile={isMobile}/>
      <Particles amount={isMobile ? 40 : 100}/>
      <Sections
        sections={sections}
        isMobile={isMobile}/>
      <Footer />
      <SideLinks open={false}/>
    </MuiThemeProvider>
  );
}

export default App;
