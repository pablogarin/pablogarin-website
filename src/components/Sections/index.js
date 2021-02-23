import React from 'react';

import Section from './Section'

const Sections = (props) => {
  const {
    isMobile,
    sections,
  } = props;
  let count = 0;
  const getCount = () => {
    return count++;
  }
  return (
    <>
      {sections && Object.entries(sections).map(([key, section]) => (
        <Section
          key={key}
          ref={section.ref}
          sectionTitle={section.title}
          isMobile={isMobile}
          parity={getCount() % 2 === 0 ? 'even' : 'odd'}
          className={section.styles}
        >
            {section.component}
        </Section>
      ))}
    </>
  )
}

export default Sections;
