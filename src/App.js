import Section from './components/section';
import Container from './components/container';
import Form from './components/form';
import Contacts from './components/contacts';
import dataGenerator from './helpers/dataGenerator';
import contactsData from './data/contacts.json';

import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: dataGenerator(contactsData),
    name: '',
    number: '',
  };
  render() {
    return (
      <>
        <Section title="Phonebook">
          <Container>
            <Form />
          </Container>
        </Section>

        <Section title="Contacts">
          <Container>
            <Contacts contacts={this.state.contacts} />
          </Container>
        </Section>
      </>
    );
  }
}

export default App;
