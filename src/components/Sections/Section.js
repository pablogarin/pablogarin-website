import React, {
  forwardRef,
  cloneElement,
  Children,
  useState,
  useEffect
} from 'react';
import {
  Box,
  Grid,
  Divider,
  Slide,
  Typography
} from '@material-ui/core';
import Title from '../styled/Title'
import SectionBackground from './SectionBackground';
import useScrollYPosition from '../../hooks/useScrollYPosition';
import useInView from '../../hooks/useInView';


const Section = forwardRef((props, ref) => {
  // const [showTitle, setShowTitle] = useState(false);
  const {
    className,
    children,
    isMobile,
    sectionTitle,
    parity,
  } = props;
  const [titleRef, showTitle] = useInView({ rootMargin: '-160px' })
  useEffect(() => {
    titleRef(ref.current)
  }, [ref])
  // titleRef(ref.current)
  /*
  useScrollYPosition((position) => {
    if (!ref.current) return;
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > ref.current.offsetTop-(window.innerHeight/1.8)) {
      setShowTitle(true);
    }
  });
  */
  const [setRef, visible] = useInView({ rootMargin: '-50%' })
  const childrenWithProps = Children.map(
    children,
    (c) => cloneElement(
      c,
      {
        isMobile,
        visible,
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
                <Box>
                  <Title in={showTitle}>
                    {sectionTitle}
                  </Title>
                </Box>
              </Slide>
            </Grid>
          )}
          <Grid
            item
            container
            direction="row"
            justify="center"
            ref={setRef}
          >
              <SectionBackground parity={parity} />
              {childrenWithProps}
          </Grid>
      </Grid>
      <Divider />
    </>
  )
})

export default Section
