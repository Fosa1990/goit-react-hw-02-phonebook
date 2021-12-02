import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  font-family: var(--font);
  font-size: 18px;
  line-height: 1.5;
`;

const Input = styled.input``;

const Filter = ({ value, onChange }) => (
  <Label>
    <Title>Find contacts by name</Title>
    <Input type="search" name="search" value={value} onChange={onChange} />
  </Label>
);

export default Filter;
