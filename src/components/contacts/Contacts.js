import styled from 'styled-components';

const Title = styled.p`
  font-family: var(--font);
  font-size: 18px;
  line-height: 1.5;
  margin: 0;
`;

const ListItem = styled.li`
  font-family: var(--font);
  font-size: 18px;
  line-height: 1.5;
  padding: 2px;
`;

const Contacts = ({ contacts }) => {
  return (
    <div>
      <label htmlFor="search">
        <Title>Find contacts by name</Title>
        <input type="search" name="search" id="search" />
      </label>
      <ul>
        {contacts.map(person => (
          <ListItem key={person.id}>
            {person.name} : {person.number}
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
