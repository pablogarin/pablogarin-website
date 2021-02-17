import {Box, IconButton, ButtonGroup} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SideLinks = () => {
  return (
    <Box position="fixed" style={{bottom: 40}}>
      <ButtonGroup
        orientation="vertical">
        <IconButton
          href="https://github.com/pablogarin/"
          target="_blank"
          aria-label="GitHub"
          color="primary">
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/pablo-garin/"
          target="_blank"
          aria-label="LinkedIn"
          color="primary">
          <LinkedInIcon />
        </IconButton>
      </ButtonGroup>
    </Box>
  )
}

export default SideLinks
