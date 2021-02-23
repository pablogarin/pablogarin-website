import React, {
  forwardRef,
  cloneElement,
  Children,
  useState,
} from 'react';
import {
  Grid,
  Divider,
  Slide,
  Typography
} from '@material-ui/core';
import SectionBackground from './SectionBackground';
import useScrollYPosition from '../../hooks/useScrollYPosition';


const Section = forwardRef((props, ref) => {
  const [showTitle, setShowTitle] = useState(false);
  const {
    className,
    children,
    isMobile,
    sectionTitle,
    parity,
  } = props;
  console.log(parity)
  useScrollYPosition((position) => {
    if (!ref.current) return;
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > ref.current.offsetTop-(window.innerHeight/1.8)) {
      setShowTitle(true);
    }
  });
  const childrenWithProps = Children.map(
    children,
    (c) => cloneElement(
      c,
      {
        isMobile
      }
    )
  );
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        style={{
          minHeight: '100vh',
          paddingTop: 70,
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
              <SectionBackground parity={parity} />
              {childrenWithProps}
          </Grid>
      </Grid>
      <Divider />
    </>
  )
})

export default Section
