import {
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
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Sections from './components/Sections';
import SideLinks from './components/SideLinks';
import Studies from './components/Studies';

const useStyles = makeStyles({
  aboutSection: {
    background: `linear-gradient(45deg, ${theme.palette.background.default}, ${theme.palette.secondary.light})`,
    minHeight: '100vh'
  }
})

const App = (props) => {
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
    'about': {
      buttonText: 'About',
      ref: useRef(null),
      component: (<About />),
      styles: classes.aboutSection,
    },
    'studies': {
      title: 'Studies',
      buttonText: 'Studies',
      ref: useRef(null),
      component: (<Studies />),
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
      <Header sections={sections} isMobile={isMobile}/>
      <Sections sections={sections} isMobile={isMobile}/>
      <Footer />
      <SideLinks />
    </MuiThemeProvider>
  );
}

export default App;
