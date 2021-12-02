import Section from './components/section';
import Container from './components/container';
import Form from './components/form';
import Contacts from './components/contacts';
import dataGenerator from './helpers/dataGenerator';
import contactsData from './data/contacts.json';
import { nanoid } from 'nanoid';

import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: dataGenerator(contactsData),
  };

  onSubmitHandler = data => {
    data.id = nanoid();

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, data],
      };
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <Container>
            <Form onSubmit={this.onSubmitHandler} />
          </Container>
        </Section>

        <Section title="Contacts">
          <Container>
            <Contacts contacts={contacts} />
          </Container>
        </Section>
      </>
    );
  }
}

export default App;
