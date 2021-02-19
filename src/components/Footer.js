import {Box, Typography} from '@material-ui/core';

import {useTheme, makeStyles} from '@material-ui/core/styles';

const Footer = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      background: theme.palette.primary.main,
      padding: 10,
      color: theme.palette.primary.contrastText
    }
  });
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root} align="center">
        <Typography>Pablo Garin &copy; 2021</Typography>
      </Box>
    </>
  )
}

export default Footer
