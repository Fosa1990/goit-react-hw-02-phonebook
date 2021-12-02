import React, { Component } from 'react';
import styled from 'styled-components';

const MainForm = styled.form`
  display: inline-flex;
  width: 250px;
  padding: 5px;
  margin: 5px;
  flex-wrap: wrap;
  font-family: 'Roboto', sans-serif;
`;

const FromButton = styled.button`
  margin-top: 25px;
  border: 1px solid rgb(255, 252, 252);
  box-shadow: 0.7px 0.7px 0.75px rgb(173, 172, 172);
  border-radius: 6px;
  background-color: rgb(245, 250, 245);
  padding: 3px 10px 3px 10px;

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  transition: all 250ms ease-in;

  :hover {
  cursor: pointer;
  background-color: rgba(50, 50, 251, 0.719);
  border: 1px solid rgba(45, 45, 231, 0.596);
`;

const FormLabel = styled.label`
  margin: 0 0 2px 0;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 600;
`;

const FormInput = styled.input`
  margin-bottom: 20px;
`;

class Form extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: [value] });
    console.log(`handleChange: Target: ${[name]}, Value: ${[value]}`);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(
      `handleSubmit: Name: ${this.state.name}, Number: ${this.state.number}`,
    );
  };

  render() {
    return (
      <MainForm onSubmit={this.handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            placeholder="Enter fullname"
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>

        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            placeholder="Enter phone number"
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>

        <FromButton type="submit">Add contact</FromButton>
      </MainForm>
    );
  }
}
export default Form;
