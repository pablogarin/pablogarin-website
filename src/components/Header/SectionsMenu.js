import {
  Button,
  Typography
} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  active: {
    borderBottomWidth: 2,
    borderBottomColor: theme.palette.primary.main,
    borderBottomStyle: 'solid'
  }
}));

const SectionsMenu = (props) => {
  const {
    activeSection,
    sections,
    selectView
  } = props;
  const classes = useStyles();
  return (
    <>
    {sections && Object.entries(sections).map(([key, section]) => (
      <Button
        key={key}
        onClick={() => selectView(section.ref)}
        size="large">
        <Typography className={key === activeSection ? classes.active : null}>{section.buttonText}</Typography>
      </Button>
    ))}
    </>
  )
}

export default SectionsMenu
