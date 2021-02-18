import 'fontsource-roboto';
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
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Sections from './components/Sections';
import SideLinks from './components/SideLinks';

const useStyles = makeStyles({
  aboutSection: {
    background: `linear-gradient(45deg, ${theme.palette.background.default}, ${theme.palette.secondary.light})`,
    backgroundImage: 'url("/res/images/background.jpg")',
    backgroundRepeat:'no-repeat',
    backgroundSize: '120% auto',
    minHeight: '100vh'
  }
})

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
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
        isMobile={isMobile}
        activeSection={activeSection}
        setActiveSection={setActiveSection}/>
      <Sections sections={sections} isMobile={isMobile}/>
      <Footer />
      <SideLinks open={activeSection==="about"}/>
    </MuiThemeProvider>
  );
}

export default App;
