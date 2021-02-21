import {
  forwardRef,
  cloneElement,
  Children,
  useState,
  useEffect,
} from 'react';
import {
  Grid,
  Divider,
  Slide,
  Typography
} from '@material-ui/core';


const Section = forwardRef((props, ref) => {
  const [showTitle, setShowTitle] = useState(false);
  const {
    active,
    className,
    children,
    isMobile,
    scrollPosition,
    sectionTitle
  } = props;
  useEffect(() => {
    if (scrollPosition > ref.current.offsetTop-(window.innerHeight/1.3)) {
      setShowTitle(true);
    }
  }, [scrollPosition, ref])
  console.log()
  const childrenWithProps = Children.map(children, c => cloneElement(c, {active, isMobile, scrollPosition}));
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        style={{
          minHeight: '100vh',
          paddingTop: 70
        }}
        className={className}
        ref={ref}>
          {sectionTitle && (
            <Grid item xs={12} style={{ height: 80 }}>
              <Slide direction="right" in={showTitle} mountOnEnter unmountOnExit>
                <Typography variant="h3" align="center" spacing={15}>
                  {sectionTitle}
                </Typography>
              </Slide>
            </Grid>
          )}
          <Grid
            item
            container
            direction="row"
            justify="center">
              {childrenWithProps}
          </Grid>
      </Grid>
      <Divider />
    </>
  )
})

export default Section
