import {
  useEffect,
  useState
} from 'react';
import Section from './Section'

const Sections = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const getScrollPositionFromEvent = () => {
      setScrollPosition(window.pageYOffset)
    };
    window.addEventListener('scroll', getScrollPositionFromEvent)
  }, [setScrollPosition]);
  const {
    activeSection,
    isMobile,
    sections,
  } = props;
  return (
    <>
      {sections && Object.entries(sections).map(([key, section]) => (
        <Section
          key={key}
          ref={section.ref}
          sectionTitle={section.title}
          isMobile={isMobile}
          className={section.styles}
          active={activeSection === key}
          scrollPosition={scrollPosition}>
            {section.component}
        </Section>
      ))}
    </>
  )
}

export default Sections;
