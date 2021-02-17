import CssBaseline from '@material-ui/core/CssBaseline'
import {MuiThemeProvider} from '@material-ui/core/styles'
import {makeStyles} from '@material-ui/core/styles'
// Theme
import theme from './theme'
// Custom Components
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Section from './components/Section'
import SideLinks from './components/SideLinks'
import Studies from './components/Studies'

const useStyles = makeStyles({
  aboutSection: {
    background: `linear-gradient(45deg, ${theme.palette.background.default}, ${theme.palette.secondary.light})`,
    minHeight: '100vh'
  }
})

const App = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header></Header>
      <Section className={classes.aboutSection}>
        <About />
      </Section>
      <Section sectionTitle="Studies">
        <Studies />
      </Section>
      <Section sectionTitle="Job Experience">
        <Experience />
      </Section>
      <Footer />
      <SideLinks />
    </MuiThemeProvider>
  );
}

export default App;
