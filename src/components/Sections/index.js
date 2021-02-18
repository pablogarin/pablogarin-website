import React from 'react';
import Section from './Section'

const Sections = (props) => {
  const {
    isMobile,
    sections
  } = props;
  return (
    <>
      {sections && Object.entries(sections).map(([key, section]) => (
        <Section
          key={key}
          ref={section.ref}
          sectionTitle={section.title}
          isMobile={isMobile}
          className={section.styles}>
            {section.component}
        </Section>
      ))}
    </>
  )
}

export default Sections;
