import React, { Component } from 'react';
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

export class Contacts extends Component {
  state = {
    contacts: this.props.contacts,
    filter: '',
  };

  onHandleSearch = e => {
    this.setState({
      filter: e.currentTarget.value.toLowerCase(),
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <label htmlFor="search">
          <Title>Find contacts by name</Title>
          <input
            type="search"
            name="search"
            id="search"
            onChange={this.onHandleSearch}
          />
        </label>
        <ul>
          {contacts
            .filter(person =>
              person.name.toLowerCase().includes(this.state.filter),
            )
            .map(person => (
              <ListItem key={person.id}>
                {person.name} : {person.number}
              </ListItem>
            ))}
        </ul>
      </div>
    );
  }
}

export default Contacts;
