import {
  Box,
  Button,
  Collapse,
  List,
  ListItem,
  Typography
} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderBottomColor: theme.palette.primary.main,
    borderBottomStyle: 'solid'
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row'
  },
  mobile: {
    position: 'absolute',
    top: 40,
    right: 0,
    /*
    display: 'flex',
    flexDirection: 'column',
    */
  }
}));

const SectionsMenu = (props) => {
  const {
    activeSection,
    sections,
    selectView,
    isMobile,
    open
  } = props;
  const classes = useStyles();
  return (
    <Box className={isMobile ? classes.mobile : ''}>
      <Collapse in={open} collapsedHeight={0}>
        <List
          className={!isMobile ? classes.horizontal : ''}>
        {sections && Object.entries(sections).map(([key, section]) => (
          <ListItem
            key={key}
            style={{
              justifyContent: (!isMobile ? 'center' : 'flex-end')
            }}
            className={key === activeSection ? classes.active : null}>
              <Button
                onClick={() => selectView(section.ref)}
                size="large">
                <Typography
                  color="secondary">
                    {section.buttonText}
                  </Typography>
              </Button>
          </ListItem>
        ))}
        </List>
      </Collapse>
    </Box>
  )
}

export default SectionsMenu
