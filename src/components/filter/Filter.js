import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  margin: 5px 0;
  color: var(--white);
  font-family: var(--font);
  font-size: 18px;
  line-height: 1.5;
`;

const Span = styled.span`
  color: var(--yellow);
`;

const Input = styled.input`
  color: var(--blue);
`;

const Filter = ({ value, onChange }) => (
  <>
    <Label>
      <Title>
        Find contacts by <Span>name</Span>
      </Title>
      <Input type="search" name="search" value={value} onChange={onChange} />
    </Label>
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
