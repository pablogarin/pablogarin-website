import React from 'react';
import Section from './Section'

const Sections = (props) => {
  const {sections} = props;
  return (
    <>
      {sections && Object.entries(sections).map(([key, section]) => (
        <Section
          key={key}
          ref={section.ref}
          sectionTitle={section.title}
          className={section.styles}>
            {section.component}
        </Section>
      ))}
    </>
  )
}

export default Sections;
