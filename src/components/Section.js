import { Grid, Divider, Typography } from '@material-ui/core';


const Section = (props) => {
  const { className, children, sectionTitle } = props;
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{minHeight: '100vh'}}
        className={className}>
        {sectionTitle && (<Grid item xs={12} style={{margin: '20px 0'}}>
          <Typography variant="h3" align="center" spacing={15}>
            {sectionTitle}
          </Typography>
        </Grid>)}
        {children}
      </Grid>
      <Divider />
    </>
  )
}

export default Section
