import {forwardRef} from 'react';
import {
  Grid,
  Divider,
  Typography
} from '@material-ui/core';


const Section = forwardRef((props, ref) => {
  const { className, children, sectionTitle } = props;
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          minHeight: '100vh',
          paddingTop: 56
        }}
        className={className}
        ref={ref}>
          {sectionTitle && (
            <Grid
              item xs={12}>
              <Typography variant="h3" align="center" spacing={15}>
                {sectionTitle}
              </Typography>
            </Grid>
          )}
          <Grid item>{children}</Grid>
      </Grid>
      <Divider />
    </>
  )
})

export default Section
