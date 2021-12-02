import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 0 20px;
  margin: 0;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
`;

const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
