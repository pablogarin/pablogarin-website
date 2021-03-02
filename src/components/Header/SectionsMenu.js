import React from 'react';
import {
  Box,
  Button,
  Collapse,
  List,
  ListItem,
  Paper,
  Typography
} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: 'transparent',
    [theme.breakpoints.up("sm")]: {
      borderBottomWidth: 2,
      borderBottomColor: theme.palette.primary.main,
      borderBottomStyle: 'solid'
    }
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row'
  },
  mobile: {
    position: 'absolute',
    top: theme.spacing(6),
    right: theme.spacing(1),
    /*
    display: 'flex',
    flexDirection: 'column',
    */
  },
  menuDesktop: {
    background: 'transparent',
    boxShadow: 'none'
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
        <Paper className={!isMobile ? classes.menuDesktop : ''}>
          <List
            className={!isMobile ? classes.horizontal : ''}>
          {sections && Object.entries(sections).map(([key, section]) => (
            <ListItem
              key={key}
              style={{
                justifyContent: 'center',
              }}
              className={key === activeSection ? classes.active : null}>
                <Button
                  onClick={() => selectView(section.ref)}
                  size="large">
                  <Typography
                    color="white">
                      {section.buttonText}
                    </Typography>
                </Button>
            </ListItem>
          ))}
          </List>
        </Paper>
      </Collapse>
    </Box>
  )
}

export default SectionsMenu
